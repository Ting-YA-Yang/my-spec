# 第一节课
## changelog
Q: 执行完-r 0命令后changelog.md文件不再更新，且之前的changelog不带版本号  
A: 执行pnpm version x.x.x而自动生成的 "version": x.x.x导致的问题，删掉package.json文件里因为执行pnpm version x.x.x而自动生成的 "version": x.x.x，执行conventional-changelog命令就生效了  
使用lerna bump version

## packages
packages中的包 lerna create 命令 [lerna create](https://github.com/lerna/lerna/tree/main/libs/commands/create#readme)

## publish

### 426 required upgraded  
将registry改为https://registry.npmjs.org/，但要注意packages中的package.json文件里registry也要改成https://registry.npmjs.org/  

### E403 You do not have permission to publish "xxx". Are you logged in as the correct user?  
确认已在命令行登录npm，再检查package name是否unique。