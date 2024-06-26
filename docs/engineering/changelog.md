# CHANGELOG 规范

## 前言

作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 `Changelog`）吗？

1. 如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 `Changelog` `是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog` 可以帮助他们了解新版本有哪些变化。
2. 如果你在开发一个业务应用，那么 `Changelog` 不是必需的。然而提供一个 `Changelog` 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。

[Git 规范](./git.md) 已经对 `Git` 提交日志的格式进行了约束，为何还要再约束 `Changelog` 的格式呢？