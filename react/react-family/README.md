1.模块热更新配置使用两种方式：

(1)在入口文件index.js加入

```
if(module.hot){
    module.hot.accept();
}
```
然后以--hot参数启动

(2)在配置文件中加入：
```
devServer:{hot:true}

plugins: [
    new webpack.HotModuleReplacementPlugin()
]
```

注：
当以--hot参数启动时，会默认添加（2）中插件；不加--hot参数就需要手动new这个插件