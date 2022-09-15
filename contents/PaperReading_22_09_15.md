---
title: 'ASAP: A Speculative Approach to Persistence'
slug: paper_reading_22_09_15
description: NVM 
keywords: NVM, memory fence
---

# ASAP: A Speculative Approach to Persistence

# Intr
持久性内存使得可恢复应用(recoverable)成为可能，
但是程序设计者必须确保数据被刷到可持久化区域，
这些缓存写回指令会引起长时间的停顿。
同时由于cpu和memory controller的重新排序，
设计者不得不通过昂贵的栅栏指令(fence)确保刷新顺序。

# Key idea
ASAP： 只有在发生故障时才需要强制排序。
ASAP乐观的刷新写入并存储足够的信息，在故障时更正内存内容。
ASAP会为所有无序更新内容维护一个撤销日志(undo log)。
将撤销日志写入NVM会导致额外写放大，
因此ASAP使用intel异步DRAM刷新(ADR)来将信息存在memory controller中。
ADR允许故障发生时将少量数据从内存控制器写回NVM。

# Persistency Models
ISA-level persistency models:
   Strict persistency 
   Epoch persistency
   Strand persistency
Language-Level Persistency:
   Acquire-Release Persistency
   Release Persistency 

# Motivation
1. Avoid flushing stalls in a multi-core multi-memory controller system
2. handle cross dependencies efficiently