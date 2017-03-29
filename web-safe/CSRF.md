CSRF: Cross Site Rquest Forgery，跨站请求伪造

攻击者盗用你的身份，以你的名义发送恶意请求

受到CSRF的影响：
以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账



#### CSRF原理

**三个基本主体**

- User (Broswer)
- WebA（Server）
- WebB (Hacker)

> 
1. User login -> WebA
2. WebA res && set-Cookie -> User
3. User notLogout WebA && visit Hacker
4. Hacker req to WebA through User
5. User take Cookie visit WebA

完成一个CSRF攻击，简单包括：
1.登录受信任网站A，并在本地生成Cookie。
2.在不登出A的情况下，访问危险网站B。
so, Hacker -> User -> WebA，达到模拟用户操作目的

![CSRF原理](http://pic002.cnblogs.com/img/hyddd/200904/2009040916453171.jpg)

#### 一些理解

如何避免CSRF
- 清除cookie，你不能保证你关闭浏览器了后，你本地的Cookie立刻过期，你上次的会话已经结束。（事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了......）
- 登出之前访问的网站，你不能保证你登录了一个网站后，不再打开一个tab页面并访问另外的网站

#### CSRF的简单实现

- Hacker页上内嵌

//若某些敏感操作是以GET请求完成

```
　　<img src=http://www.mybank.com/Transfer.php?toBankId=11&money=1000>
```

//改进使用POST请求

```
<form action="Transfer.php" method="POST">
　　　　<p>ToBankId: <input type="text" name="toBankId" /></p>
　　　　<p>Money: <input type="text" name="money" /></p>
　　　　<p><input type="submit" value="Transfer" /></p>
</form>
```

#### 产生CSRF问题的原因

CSRF攻击源于Web的隐式身份验证机制，隐式身份机制虽然可以保证请求来自特定用户的浏览器，但是无法保证该请求是用户批准发送的；

#### CSRF防御

CSRF防御可从服务端和客户端入手

1. 服务端的CSRF防御
在客户端页面增加伪随机数；

