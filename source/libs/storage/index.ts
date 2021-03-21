import {browser} from 'webextension-polyfill-ts';

export class BrowserStorage {
  private static instance: BrowserStorage;

  private followers: string[];

  constructor(followers: string[]) {
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
  list(): string[] {
    return this.followers;
  }

  /**
   * add a new follower, and
   * sync followers with Chrome.
   * @param name The follower name to store.
   */
  add(name: string): void {
    this.followers.push(name);
    browser.storage.sync.set({followers: this.followers});
  }

  /**
   * remove the follower, and
   * sync followers with Chrome.
   * @param name
   */
  remove(name: string): void {
    this.followers = this.followers.filter((candidate: string) => {
      return candidate !== name;
    });
    browser.storage.sync.set({followers: this.followers});
  }
}
