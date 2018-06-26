## 项目介绍
 项目基于react官方脚手架, 对GraphQL简单的使用写的一个demo。
 项目中主要用到了apollo client(https://www.apollographql.com/)  
 来搭配graphql(http://graphql.cn/)。  
 项目中demo的文件为：  
 src/about/About.js(query demo)  
 src/about/Form.js(mutation demo)  
 由于用的官方配好的graphql服务端，不支持mutation，故此，上面demo暂时只有query是可以看到效果的。
## 运行项目
 // 安装依赖 npm install  
 // 运行项目 npm start
## 关于GraphQL的简介
GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

### GraphQL特点
- 请求你所要的数据不多不少  
向你的 API 发出一个 GraphQL 请求就能准确获得你想要的数据，不多不少。 GraphQL 查询总是返回可预测的结果。使用 GraphQL 的应用可以工作得又快又稳，因为控制数据的是应用，而不是服务器。
- 获取多个资源只用一个请求  
GraphQL 查询不仅能够获得资源的属性，还能沿着资源间引用进一步查询。典型的 REST API 请求多个资源时得载入多个 URL，而 GraphQL 可以通过一次请求就获取你应用所需的所有数据。这样一来，即使是比较慢的移动网络连接下，使用 GraphQL 的应用也能表现得足够迅速。
- 描述所有的可能类型系统  
GraphQL API 基于类型和字段的方式进行组织，而非入口端点。你可以通过一个单一入口端点得到你所有的数据能力。GraphQL 使用类型来保证应用只请求可能的数据，还提供了清晰的辅助性错误信息。应用可以使用类型，而避免编写手动解析代码。  


### GraphQL查询

通过query关键字声明查询，如下：  

```
query为操作类型，HeroNameAndFriend为操作名称
query HeroNameAndFriends {  
  hero {  
    name  
    friends {  
      name  
    }  
  }  
}
```
通过上面的查询得到的数据结果如下，可以观察到查询的数据格式和返回的数据格式是一样的，没有任何冗余的数据。  

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```
当然，GraphQL的操作类型不止有query，还有mutation 或 subscription。使用哪个操作类型取决你打算做什么操作。  
更详细的教程可以参照官网：http://graphql.cn/。  

## 关于项目中知识链接  

- http://graphql.cn/
- https://www.apollographql.com/
- http://reacttraining.cn/web/api/Redirect
- https://blog.csdn.net/sinat_17775997/article/details/77411324
- http://www.360doc.com/content/16/0828/12/16002580_586499074.shtml
