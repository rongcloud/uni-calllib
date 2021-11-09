export class Logger {
  public readonly tag: string
  /**
   *
   * @param tag 标签
   */
  constructor (tag: string) {
    this.tag = tag
  }

  public log (str: string) {
    console.log(`[${this.tag}] ${new Date().toISOString()} ${str}`)
  }
}

const logger = new Logger('RCUNICallLib')
export default logger
