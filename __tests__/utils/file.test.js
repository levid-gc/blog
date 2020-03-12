import { readFiles } from '../../utils/file'
const path = require('path')

describe('file', () => {
  describe('readFiles', () => {
    it('没有传递查找目录时抛出异常', () => {
      expect(readFiles).toThrow();
    })

    it('在非递归模式下读取到正确数据量的文件路径', () => {
      const dirPath = path.join(process.cwd(), '/__tests__/posts/')
      const files = readFiles(dirPath)
      expect(files.length).toBe(1)
    })

    it('在递归模式下读取到正确数据量的文件路径', () => {
      const dirPath = path.join(process.cwd(), '/__tests__/posts/')
      const files = readFiles(dirPath, true)
      expect(files.length).toBe(5)
    })
  })
})