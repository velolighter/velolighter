import {browser} from 'webextension-polyfill-ts';

interface Follower {
  id: number;
  userName: string;
}

export class BrowserStorage {
  private static instance: BrowserStorage;

  public followers: Follower[];

  constructor(followers: Follower[]) {
    this.followers = followers;
  }

  /**
   * getStorage returns the instance, which is
   * the singleton instance.
   * @returns BrowserStorage
   */
  static async getStorage(): Promise<BrowserStorage> {
    if (BrowserStorage.instance) {
      return BrowserStorage.instance;
    }

    let {followers} = await browser.storage.sync.get('followers');
    if (followers === undefined) {
      followers = [];
    }

    BrowserStorage.instance = new BrowserStorage(followers);
    return BrowserStorage.instance;
  }

  /**
   * list returns followers.
   * @returns followers
   */
  list(): Follower[] {
    return this.followers;
  }

  /**
   * add a new follower, and
   * sync followers with Chrome.
   * @param name The follower name to store.
   */
  add(follower: Follower): void {
    this.followers.push(follower);
    browser.storage.sync.set({followers: this.followers});
  }

  /**
   * remove the follower, and
   * sync followers with Chrome.
   * @param name
   */
  remove(name: string): void {
    this.followers = this.followers.filter((candidate: Follower) => {
      return candidate.userName !== name;
    });
    browser.storage.sync.set({followers: this.followers});
  }
}
