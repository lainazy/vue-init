#!/bin/sh

BLUE_COLOR='\033[1;36m' # 加粗;无底色;蓝色字体
GREEN_COLOR='\033[1;32m' # 加粗;无底色;绿色字体
ECHO_RESET='\033[0m' # 重置所有属性

echo -e "${BLUE_COLOR}> Starting eslint check...${ECHO_RESET}"

# 设置需要校验的branch，默认值为develop，$1表示第一个参数
# branch='develop'
# if [ $1 ]
# then
#   branch=$1
# fi

# 获取需要使用eslint校验的文件列表
# lintlist=`git diff origin/${branch} --name-only | grep -E "\.js$|\.vue$" | grep "^src/"`
lintlist=`git diff HEAD --name-only | grep -E "\.(js|vue)$" | grep "^src/"`

if [ -z "${lintlist}" ]
then
  echo -e "${GREEN_COLOR}> No file need to check again, skip over eslint.${ECHO_RESET}"
  exit 0 # 退出当前shell脚本，0表示正常退出
fi

node ./node_modules/eslint/bin/eslint.js ${lintlist}
