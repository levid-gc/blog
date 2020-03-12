const fs = require('fs')
const path = require('path')

/**
 * 读取指定路径下所有文件并返回其路径列表
 *
 * @param {string} dirPath - 目录路径
 * @param {boolean} recurse - 是否递归读取
 * @param {string[]} files - 文件路径列表
 * @returns {string[]} 文件列表
 * @author Owen
 */
export function readFiles(dirPath, recurse = false, files = []) {
  if (!dirPath) {
    throw new Error('path needs to be provided');
  }

  fs
    .readdirSync(dirPath)
    .forEach(dirName => {
      const fullPath = path.join(dirPath, dirName)
      const stat = fs.statSync(fullPath)

      if (stat.isFile()) {
        files.push(fullPath);
      } else if (stat.isDirectory() && recurse) {
        readFiles(fullPath, true, files)
      }
    })

  return files
}

