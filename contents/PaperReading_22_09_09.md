---
title: Durable Write Cache in Flash Memory SSD for Relational and NoSQL Databases
slug: paper_reading_22_09_09
description: A durable cache design made by a Tantalum capacitors, which makes DRAM cache durability.
keywords: Durability, SSD, Durable Cache, 
---

# Durable Write Cache in Flash Memory SSD for Relational and NoSQL Databases

## DuraSSD
持久性的电容 刷cache 非易失性DRAM Cache

## Motivation
SSD 读操作可能被写操作影响延迟：Dirty Page Set-> Flush-> Page Read.
No redundant write for atomicity. 超级电容：DRAM cache
Prevent reads blocked by writes. 
Fsync对不同介质的影响，提升倍率HDD < SSD. SSD cache size 不见得越大越好
4KB page size 比 16KB page size 的 Random IOPS 更好，

## Design
一个超级电容，将Buffer cache中的内容在crash时放入Dump Area保证原子性。
Buffer pool: set of queues.
Mapping table: mapping between 4KB and 8KB NAND page (8KB NAND page一般是写操作flash page的单元.Flash page 不能直接rewrite必须先擦除再写.)
Atomic writer: dump area.
Recovery manager 

## Evaluation
Benchmarks: LinkBench, YCSB, TPC-C.

Intel Xeon (R) E5-4620 CPU, 384GB DRAM, two 480GB DuraSSD with SATA 3.0 interface

write-barrier/double-write-buffer, buffer pool size.

## Conclusion
Interests: Implement real duraSSD not simulation.
Related: EADR