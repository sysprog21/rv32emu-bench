window.BENCHMARK_DATA = {
  "lastUpdate": 1705766606312,
  "repoUrl": "https://github.com/sysprog21/rv32emu",
  "entries": {
    "Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "ChinYikMing",
            "username": "ChinYikMing",
            "email": "58044437+ChinYikMing@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fca53fadb8890cf51269acb400433a735dfe368f",
          "message": "CI: Implementing benchmark regression tests (#213)\n\nThe 'pull_request_target' event is utilized for the benchmark action due\r\nto its ability to update data in the 'gh-pages' branch, which is crucial\r\nfor visualization on GitHub Pages. The 'pull_request' event lacks the\r\nnecessary 'GITHUB_TOKEN' for this task.\r\n\r\nFurthermore, 'workflow_dispatch' event is added to enable the initial\r\nsetup and running of the benchmark. This permits the storage of base\r\nbenchmark data for future comparisons.\r\n\r\nTo prevent redundant executions, a filter has been implemented to\r\nexclude the merging push event.\r\n\r\nClose #166",
          "timestamp": "2023-09-11T12:20:34Z",
          "url": "https://github.com/sysprog21/rv32emu/commit/fca53fadb8890cf51269acb400433a735dfe368f"
        },
        "date": 1694435116147,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1070.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.595,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "6262b3182f0b1b8ea089f33e0defcd53f3d7bf76",
          "message": "Get rid of rv->X[rv_reg_zero] = 0 completely",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/216/commits/6262b3182f0b1b8ea089f33e0defcd53f3d7bf76"
        },
        "date": 1694510144460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1186.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 981.191,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "33c2156c179efbebf28abde7a9e6f4ea1bdea5a5",
          "message": "Link the register jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/224/commits/33c2156c179efbebf28abde7a9e6f4ea1bdea5a5"
        },
        "date": 1695541718076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1045.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 951.842,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "cd71ee323d1e0fe44377e6ffdf05580e779377b5",
          "message": "Link the register jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/224/commits/cd71ee323d1e0fe44377e6ffdf05580e779377b5"
        },
        "date": 1695543084786,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1207.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 994.537,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48278026+qwe661234@users.noreply.github.com",
            "name": "YenFuChen",
            "username": "qwe661234"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab3e58a20db5bfad2adb9bb90838a4ae5b7b649a",
          "message": "Link the register jump (#224)\n\nThe interpreter exited the execution loop when encountering a register\r\njump instruction, resulting in a significant performance problem. To\r\ntackle this issue, the solution involves searching for the subsequent\r\nblock at the conclusion of a register jump's execution. Upon locating\r\nthe next block, the register jump is linked to it.\r\n\r\nAs shown in below analysis, this modification improves the overall\r\nperformance by 1~2%.\r\n\r\n* Core i7-11700\r\n\r\n| Metric   |    original     |    proposed    | speedup |\r\n|----------+-----------------+----------------+---------|\r\n| CoreMark | 1931.047 iter/s | 1956.64 iter/s | +1.33%  |\r\n| stream   |   79.156 sec    |   77.123 sec   | +2.57%  |\r\n\r\nClose #223",
          "timestamp": "2023-09-24T16:20:55+08:00",
          "tree_id": "b0d9fc03a4811a7c371b83cb5dfcaee487649bed",
          "url": "https://github.com/sysprog21/rv32emu/commit/ab3e58a20db5bfad2adb9bb90838a4ae5b7b649a"
        },
        "date": 1695544035970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1213.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1131.669,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "a39abe45c4f2b40cb80ba025fabe2687f82ed189",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/a39abe45c4f2b40cb80ba025fabe2687f82ed189"
        },
        "date": 1695559890230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1232.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 999.025,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "7a209983ebc593c087044412fa9fcd4f1766fe77",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/7a209983ebc593c087044412fa9fcd4f1766fe77"
        },
        "date": 1695560208143,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1253,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1134.029,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "46123602d0c3fa4f43033458580ca0ef0f3c0c1a",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/46123602d0c3fa4f43033458580ca0ef0f3c0c1a"
        },
        "date": 1695561981005,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1263.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1132.121,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "4dbfe8d9bcfd55119315affc3503d8fe80e199e1",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/4dbfe8d9bcfd55119315affc3503d8fe80e199e1"
        },
        "date": 1695562130177,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1274,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1133.984,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b7af0156ca6efb9b957dac11e67f243b2342ad72",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/b7af0156ca6efb9b957dac11e67f243b2342ad72"
        },
        "date": 1695625035711,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1231.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1005.696,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "af94d6a74f49b939aa91a36c2ec0dc8fa0bdbdf1",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/af94d6a74f49b939aa91a36c2ec0dc8fa0bdbdf1"
        },
        "date": 1695625989024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1077.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 914.475,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "05068a9c45492a291adea47342ed9802e04da823",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/05068a9c45492a291adea47342ed9802e04da823"
        },
        "date": 1695626280655,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1258.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1098.546,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d36f0d6e40cb60c9c2422ead2f8d9b34510b07ec",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/d36f0d6e40cb60c9c2422ead2f8d9b34510b07ec"
        },
        "date": 1695626775648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1261.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1131.483,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0d1f7f34f46db47d1ad38d5274155e3a3468d0eb",
          "message": "Add a new fusion instruction and remove unnecessary ones ",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/227/commits/0d1f7f34f46db47d1ad38d5274155e3a3468d0eb"
        },
        "date": 1695626900945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1226.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 998.528,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "1cff7ccfd68c57531ed649dce9de83ec3ed6172f",
          "message": "Fix tailcall updating in fused instructions",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/231/commits/1cff7ccfd68c57531ed649dce9de83ec3ed6172f"
        },
        "date": 1695700049360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1255.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1104.577,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "f0fcaa32100b539d153eef640b1fe29b09294549",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/f0fcaa32100b539d153eef640b1fe29b09294549"
        },
        "date": 1695701070196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1076.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.557,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "54f986f6cd9797b127f7eb4ebc23b656e567317a",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/54f986f6cd9797b127f7eb4ebc23b656e567317a"
        },
        "date": 1695701165873,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1058.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.773,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0746a40275c904b1285913c390f42bf07d0c90b7",
          "message": "Fix constant optimization and fused instruction",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/233/commits/0746a40275c904b1285913c390f42bf07d0c90b7"
        },
        "date": 1695716917801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1064.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 933.034,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "df41cd40c7b7c7defbd54839b1b29c8087f04eb6",
          "message": "Fix constant optimization and fused instruction",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/233/commits/df41cd40c7b7c7defbd54839b1b29c8087f04eb6"
        },
        "date": 1695735011942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1242.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1101.098,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "fa4a4f74551ba9a1de7fa0ea613e1fff3c8de64a",
          "message": "Fix constant optimization and fused instruction",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/233/commits/fa4a4f74551ba9a1de7fa0ea613e1fff3c8de64a"
        },
        "date": 1695736576339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1248.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1103.815,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "7df12b15940ac3dd8facc2a6ceba52216cb4fd24",
          "message": "Fix constant optimization and fused instruction",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/233/commits/7df12b15940ac3dd8facc2a6ceba52216cb4fd24"
        },
        "date": 1695737880075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1246.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1102.866,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "38d663d89fabe54c2a971a49454bf7cc969eea03",
          "message": "Limit the memory usage of block and block IR",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/234/commits/38d663d89fabe54c2a971a49454bf7cc969eea03"
        },
        "date": 1695816137995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1084.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1010.928,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "3affb0232abf3879c6fa98ad0ccff55dd5ea44f0",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/3affb0232abf3879c6fa98ad0ccff55dd5ea44f0"
        },
        "date": 1695826260037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1132,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1082.705,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "90fa28f05beb71ad693a882029118d9f48bce5b3",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/90fa28f05beb71ad693a882029118d9f48bce5b3"
        },
        "date": 1696052541557,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1256,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1202.143,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "fe5c2a15413df175bd347ca1f0a61fcc2df5073a",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/fe5c2a15413df175bd347ca1f0a61fcc2df5073a"
        },
        "date": 1696053289485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1066,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1015.626,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "babc35f81d14f3596fc18a9afa6cd1d7c1c1b44a",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/babc35f81d14f3596fc18a9afa6cd1d7c1c1b44a"
        },
        "date": 1696053390887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1253,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1060.277,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "bb937eadb724cf274c694a2dd1af966e3474a4ec",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/bb937eadb724cf274c694a2dd1af966e3474a4ec"
        },
        "date": 1696131071127,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1251.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1200.252,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "e5db6a7ff71ca9aade2cf1896e6dd824f3b7bb5c",
          "message": "Explain implementation aspects for certain RISC-V instructions",
          "timestamp": "2023-10-01T23:00:30+08:00",
          "tree_id": "0fd7970eb1692251bea8446db5d9b8e9337b0ed2",
          "url": "https://github.com/sysprog21/rv32emu/commit/e5db6a7ff71ca9aade2cf1896e6dd824f3b7bb5c"
        },
        "date": 1696172879211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1256.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1059.54,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "a2075748788deb8804b14c96f4b185fecc787c48",
          "message": "Inline performance-critical functions in debug builds",
          "timestamp": "2023-10-02T11:56:05+08:00",
          "tree_id": "06f4637d00e51040ab0c106449063a1edbf29aa1",
          "url": "https://github.com/sysprog21/rv32emu/commit/a2075748788deb8804b14c96f4b185fecc787c48"
        },
        "date": 1696219377671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1215.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1194.448,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "012f117b2b20c63f6b32d9f42421bf1ab08b70ee",
          "message": "Reduce memory usage for instruction block",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/232/commits/012f117b2b20c63f6b32d9f42421bf1ab08b70ee"
        },
        "date": 1696241436956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1046.6,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 987.419,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s921975628@gmail.com",
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00312241db570add3b9948a023e7ebbe2041919f",
          "message": "Reduce memory usage for instruction block (#232)\n\nThe original memory allocation strategy for instruction blocks was found\r\nto be inefficient, leading to excessive memory usage. In the previous\r\napproach, a fixed amount of memory was allocated for each block, resulting\r\nin significant wastage.\r\n\r\nTo address this issue, we have implemented a more efficient memory\r\nallocation scheme. Instead of allocating a fixed size for each block, we\r\nnow maintain a pool of rv_insn_t and allocate memory only when needed.\r\nThis new approach minimizes heap allocations and optimizes memory usage.\r\n\r\nWe have introduced a parameter, BLOCK_POOL_SIZE, which allows us to control\r\nthe balance between the number of calloc calls and memory consumption. This\r\nflexibility ensures that memory allocation occurs only when the pool is\r\ndepleted.\r\n\r\nAs a result of these changes, the heap memory allocation has significantly\r\nimproved. For example, in the puzzle.elf example, we observed a reduction in\r\nheap memory allocation from 20,306,989 bytes to just 313,461 bytes.\r\n\r\nWhile this design may lead to some discontinuity in memory spaces for\r\ninstructions in sequence, the impact on random access is minimal, as random\r\naccess is primarily required for certain fuse operations. In cases where\r\nrandom access is needed, we can employ linear search method. The potential\r\ncache locality issues resulting from the discontinuous memory spaces can\r\nalso be mitigated by adjusting the BLOCK_POOL_SIZE parameter for better\r\nperformance.",
          "timestamp": "2023-10-02T19:50:34+08:00",
          "tree_id": "7417f92613792c4c3be19bef45e3c0c3c60062a7",
          "url": "https://github.com/sysprog21/rv32emu/commit/00312241db570add3b9948a023e7ebbe2041919f"
        },
        "date": 1696247649132,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1130,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.211,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "ae2de71ae55d060f924d5deecd4f068702dbe4f5",
          "message": "Disable control flow integrity for instruction dispatching\n\nReturn-oriented programming (ROP) manipulates the stack to compromise\ncontrol flow and execute malicious code. To mitigate this, passing\n\"-fcf-protection=none\" to GCC/Clang disables 'endbr64' instruction\ngeneration, resulting in a slightly shorter instruction dispatch path.\n\n[ original ]\n$ size build/rv32emu\n   text    data     bss     dec     hex filename\n  94637    3920    4464  103021   1926d build/rv32emu\n\n000000000000b2b0 <do_addi>:\n    b2b0:       f3 0f 1e fa             endbr64\n    b2b4:       48 83 87 a8 01 00 00    addq   $0x1,0x1a8(%rdi)\n    b2bb:       01\n    b2bc:       0f b6 4e 05             movzbl 0x5(%rsi),%ecx\n    b2c0:       0f b6 56 04             movzbl 0x4(%rsi),%edx\n    b2c4:       8b 06                   mov    (%rsi),%eax\n    b2c6:       03 44 8f 58             add    0x58(%rdi,%rcx,4),%eax\n    b2ca:       89 44 97 58             mov    %eax,0x58(%rdi,%rdx,4)\n    b2ce:       0f b6 46 1c             movzbl 0x1c(%rsi),%eax\n    b2d2:       01 87 d8 00 00 00       add    %eax,0xd8(%rdi)\n    b2d8:       0f b6 46 1d             movzbl 0x1d(%rsi),%eax\n    b2dc:       84 c0                   test   %al,%al\n    b2de:       75 18                   jne    b2f8 <do_addi+0x48>\n    b2e0:       0f b6 87 10 01 00 00    movzbl 0x110(%rdi),%eax\n    b2e7:       84 c0                   test   %al,%al\n    b2e9:       75 0d                   jne    b2f8 <do_addi+0x48>\n    b2eb:       48 8b 76 38             mov    0x38(%rsi),%rsi\n    b2ef:       ff 66 20                jmpq   *0x20(%rsi)\n    b2f2:       66 0f 1f 44 00 00       nopw   0x0(%rax,%rax,1)\n    b2f8:       c3                      retq\n    b2f9:       0f 1f 80 00 00 00 00    nopl   0x0(%rax)\n\n[ proposed ]\n$ size build/rv32emu\n   text    data     bss     dec     hex filename\n  91845    3920    4464  100229   18785 build/rv32emu\n\n000000000000a970 <do_addi>:\n    a970:       48 83 87 a8 01 00 00    addq   $0x1,0x1a8(%rdi)\n    a977:       01\n    a978:       0f b6 4e 05             movzbl 0x5(%rsi),%ecx\n    a97c:       0f b6 56 04             movzbl 0x4(%rsi),%edx\n    a980:       8b 06                   mov    (%rsi),%eax\n    a982:       03 44 8f 58             add    0x58(%rdi,%rcx,4),%eax\n    a986:       89 44 97 58             mov    %eax,0x58(%rdi,%rdx,4)\n    a98a:       0f b6 46 1c             movzbl 0x1c(%rsi),%eax\n    a98e:       01 87 d8 00 00 00       add    %eax,0xd8(%rdi)\n    a994:       0f b6 46 1d             movzbl 0x1d(%rsi),%eax\n    a998:       0a 87 10 01 00 00       or     0x110(%rdi),%al\n    a99e:       75 10                   jne    a9b0 <do_addi+0x40>\n    a9a0:       48 8b 76 38             mov    0x38(%rsi),%rsi\n    a9a4:       ff 66 20                jmpq   *0x20(%rsi)\n    a9a7:       66 0f 1f 84 00 00 00    nopw   0x0(%rax,%rax,1)\n    a9ae:       00 00\n    a9b0:       c3                      retq\n    a9b1:       66 66 2e 0f 1f 84 00    data16 nopw %cs:0x0(%rax,%rax,1)\n    a9b8:       00 00 00 00\n    a9bc:       0f 1f 40 00             nopl   0x0(%rax)",
          "timestamp": "2023-10-02T20:41:50+08:00",
          "tree_id": "ba869e55ce1b068dcf80592e50354dbcb0db37b2",
          "url": "https://github.com/sysprog21/rv32emu/commit/ae2de71ae55d060f924d5deecd4f068702dbe4f5"
        },
        "date": 1696250845004,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1138.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 984.096,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "sysprog21",
            "username": "sysprog21"
          },
          "committer": {
            "name": "sysprog21",
            "username": "sysprog21"
          },
          "id": "ae2de71ae55d060f924d5deecd4f068702dbe4f5",
          "message": "Disable control flow integrity for instruction dispatching",
          "timestamp": "2023-09-30T08:34:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/236/commits/ae2de71ae55d060f924d5deecd4f068702dbe4f5"
        },
        "date": 1696250902265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1125.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.574,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79ce1925f7e5d776f30cfff11099a802df799c93",
          "message": "Disable control flow integrity for instruction dispatching (#236)\n\nReturn-oriented programming (ROP) manipulates the stack to compromise\r\ncontrol flow and execute malicious code. Recent Linux distributions such\r\nas Ubuntu enforce control-flow enforcement protection, by generating\r\nextra instructions. To avoid potential code bloating, passing\r\n\"-fcf-protection=none\" to GCC/Clang disables endbr64 instruction\r\ngeneration, resulting in a slightly shorter instruction dispatch path.  \r\n\r\n[ original ]\r\n$ size build/rv32emu\r\n   text    data     bss     dec     hex filename\r\n  94637    3920    4464  103021   1926d build/rv32emu\r\n\r\n000000000000b2b0 <do_addi>:\r\n    b2b0:       f3 0f 1e fa             endbr64\r\n    b2b4:       48 83 87 a8 01 00 00    addq   $0x1,0x1a8(%rdi)\r\n    b2bb:       01\r\n    b2bc:       0f b6 4e 05             movzbl 0x5(%rsi),%ecx\r\n    b2c0:       0f b6 56 04             movzbl 0x4(%rsi),%edx\r\n    b2c4:       8b 06                   mov    (%rsi),%eax\r\n    b2c6:       03 44 8f 58             add    0x58(%rdi,%rcx,4),%eax\r\n    b2ca:       89 44 97 58             mov    %eax,0x58(%rdi,%rdx,4)\r\n    b2ce:       0f b6 46 1c             movzbl 0x1c(%rsi),%eax\r\n    b2d2:       01 87 d8 00 00 00       add    %eax,0xd8(%rdi)\r\n    b2d8:       0f b6 46 1d             movzbl 0x1d(%rsi),%eax\r\n    b2dc:       84 c0                   test   %al,%al\r\n    b2de:       75 18                   jne    b2f8 <do_addi+0x48>\r\n    b2e0:       0f b6 87 10 01 00 00    movzbl 0x110(%rdi),%eax\r\n    b2e7:       84 c0                   test   %al,%al\r\n    b2e9:       75 0d                   jne    b2f8 <do_addi+0x48>\r\n    b2eb:       48 8b 76 38             mov    0x38(%rsi),%rsi\r\n    b2ef:       ff 66 20                jmpq   *0x20(%rsi)\r\n    b2f2:       66 0f 1f 44 00 00       nopw   0x0(%rax,%rax,1)\r\n    b2f8:       c3                      retq\r\n    b2f9:       0f 1f 80 00 00 00 00    nopl   0x0(%rax)\r\n\r\n[ proposed ]\r\n$ size build/rv32emu\r\n   text    data     bss     dec     hex filename\r\n  91845    3920    4464  100229   18785 build/rv32emu\r\n\r\n000000000000a970 <do_addi>:\r\n    a970:       48 83 87 a8 01 00 00    addq   $0x1,0x1a8(%rdi)\r\n    a977:       01\r\n    a978:       0f b6 4e 05             movzbl 0x5(%rsi),%ecx\r\n    a97c:       0f b6 56 04             movzbl 0x4(%rsi),%edx\r\n    a980:       8b 06                   mov    (%rsi),%eax\r\n    a982:       03 44 8f 58             add    0x58(%rdi,%rcx,4),%eax\r\n    a986:       89 44 97 58             mov    %eax,0x58(%rdi,%rdx,4)\r\n    a98a:       0f b6 46 1c             movzbl 0x1c(%rsi),%eax\r\n    a98e:       01 87 d8 00 00 00       add    %eax,0xd8(%rdi)\r\n    a994:       0f b6 46 1d             movzbl 0x1d(%rsi),%eax\r\n    a998:       0a 87 10 01 00 00       or     0x110(%rdi),%al\r\n    a99e:       75 10                   jne    a9b0 <do_addi+0x40>\r\n    a9a0:       48 8b 76 38             mov    0x38(%rsi),%rsi\r\n    a9a4:       ff 66 20                jmpq   *0x20(%rsi)\r\n    a9a7:       66 0f 1f 84 00 00 00    nopw   0x0(%rax,%rax,1)\r\n    a9ae:       00 00\r\n    a9b0:       c3                      retq\r\n    a9b1:       66 66 2e 0f 1f 84 00    data16 nopw %cs:0x0(%rax,%rax,1)\r\n    a9b8:       00 00 00 00\r\n    a9bc:       0f 1f 40 00             nopl   0x0(%rax)",
          "timestamp": "2023-10-02T20:59:24+08:00",
          "tree_id": "ba869e55ce1b068dcf80592e50354dbcb0db37b2",
          "url": "https://github.com/sysprog21/rv32emu/commit/79ce1925f7e5d776f30cfff11099a802df799c93"
        },
        "date": 1696251772862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1136.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 988.202,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "754006b038f656ba3f3c33d2132f123e48e1e057",
          "message": "Limit the memory usage of block and block IR",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/234/commits/754006b038f656ba3f3c33d2132f123e48e1e057"
        },
        "date": 1696258125103,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 933.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 813.513,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "06ed289db01245e2fe6061021c6de7b63b23739b",
          "message": "Limit the memory usage of block and block IR",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/234/commits/06ed289db01245e2fe6061021c6de7b63b23739b"
        },
        "date": 1696304666366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1136.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 984.143,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "ac050039e10637fe702300cd8790106fdde8051a",
          "message": "Limit the memory usage of block and block IR",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/234/commits/ac050039e10637fe702300cd8790106fdde8051a"
        },
        "date": 1696322198455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 958.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 836.547,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "29e4fe696a478b4ef665c7632d417219e1ed78e9",
          "message": "Macro operation fusion: sequential shift instructions",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/237/commits/29e4fe696a478b4ef665c7632d417219e1ed78e9"
        },
        "date": 1696397539715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1133.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 871.828,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48278026+qwe661234@users.noreply.github.com",
            "name": "YenFuChen",
            "username": "qwe661234"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd3e181b740e050ead869d2d4094cb5ded3d75cd",
          "message": "Macro operation fusion: sequential shift instructions (#237)\n\nClose #188",
          "timestamp": "2023-10-04T14:20:46+08:00",
          "tree_id": "2fe5f2d8bef0e56fdc0bea6f3e13051ba8387263",
          "url": "https://github.com/sysprog21/rv32emu/commit/cd3e181b740e050ead869d2d4094cb5ded3d75cd"
        },
        "date": 1696400837688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1218.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1014.215,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "2ef684265bf2a31a3a7d17a39a0cd7e2f14d1fba",
          "message": "Modify fused lw/sw instruction",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/240/commits/2ef684265bf2a31a3a7d17a39a0cd7e2f14d1fba"
        },
        "date": 1696487305339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1016.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 872.683,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48278026+qwe661234@users.noreply.github.com",
            "name": "YenFuChen",
            "username": "qwe661234"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47f85366a3b1a87ed890d38a6e51f453bb9ddb9f",
          "message": "Fuse reordered lw/sw instructions (#240)\n\nOriginally, we only fused LW/SW instructions with continuous memory\r\naddresses. However, some LW/SW instructions cannot be fused due to\r\ncompiler instruction reordering. For example:\r\n  108e8: 01312e23 sw s3, 28(sp)\r\n  108ec: 02112623 sw ra, 44(sp)\r\n  108f0: 02812423 sw s0, 40(sp)\r\n  108f4: 02912223 sw s1, 36(sp)\r\n  108f8: 03212023 sw s2, 32(sp)\r\n  108fc: 01412c23 sw s4, 24(sp)\r\n\r\nTo fuse more lw/sw instructions that are reordered by the compiler, we\r\nneed to relax the restriction. With this modification, we can fuse\r\nreordered LW/SW instructions.\r\n\r\nClose #218",
          "timestamp": "2023-10-05T14:38:37+08:00",
          "tree_id": "15755faf2915b812a33892b0df70dceef871a001",
          "url": "https://github.com/sysprog21/rv32emu/commit/47f85366a3b1a87ed890d38a6e51f453bb9ddb9f"
        },
        "date": 1696488277736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1264.4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1014.908,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "239fc368eae8aa8aaf2c5e942cbe608f14c9d1b0",
          "message": "Place __builtin_unreachable for compiler optimizations\n\n\"__builtin_unreachable()\" in GCC and Clang serves as an optimization\npragma rather than an assertion. If control does happen to reach a\n\"__builtin_unreachable()\" statement, it does not necessarily result in\nprogram termination. Instead, unexpected and potentially disastrous\nevents can occur, such as switch statements leading to arbitrary\naddresses or functions continuing execution beyond their end without\nreturning.\n\n[ original ]\n$ size  build/rv32emu\n   text    data     bss     dec     hex filename\n  92405    3920    4464  100789   189b5 build/rv32emu\n\n[ proposed ]\n$ size build/rv32emu\n   text    data     bss     dec     hex filename\n  92341    3920    4464  100725   18975 build/rv32emu",
          "timestamp": "2023-10-05T17:07:54+08:00",
          "tree_id": "cd76125c8aa2ed61a94a4dc16069d0445e4b825f",
          "url": "https://github.com/sysprog21/rv32emu/commit/239fc368eae8aa8aaf2c5e942cbe608f14c9d1b0"
        },
        "date": 1696497375872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1060.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 856.132,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "26729696c77122a8f6bb0ee7d85dc1a7ce8c0e56",
          "message": "Place __UNREACHABLE for compiler optimizations\n\n\"__builtin_unreachable()\" in GCC and Clang serves as an optimization\npragma rather than an assertion. If control does happen to reach a\n\"__builtin_unreachable()\" statement, it does not necessarily result in\nprogram termination.\n\n[ original ]\n$ size  build/rv32emu\n   text    data     bss     dec     hex filename\n  92405    3920    4464  100789   189b5 build/rv32emu\n\n[ proposed ]\n$ size build/rv32emu\n   text    data     bss     dec     hex filename\n  92341    3920    4464  100725   18975 build/rv32emu",
          "timestamp": "2023-10-05T17:18:09+08:00",
          "tree_id": "d8e6756ac6a729d99b9bf8fe1b8407c803ce4c92",
          "url": "https://github.com/sysprog21/rv32emu/commit/26729696c77122a8f6bb0ee7d85dc1a7ce8c0e56"
        },
        "date": 1696497931081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1271.85,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1017.142,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "1c2be0a9e3017753a6dbaa711c8f646d360feb6a",
          "message": "Tweak constopt_info_t code manipulation\n\nThis patch simplifies the naming scheme for constant optimization\nroutines. In addition, an unused parameter warning is eliminated.",
          "timestamp": "2023-10-06T10:47:29+08:00",
          "tree_id": "4c915f1512ffb6ef5211230bdaf38c8569b35408",
          "url": "https://github.com/sysprog21/rv32emu/commit/1c2be0a9e3017753a6dbaa711c8f646d360feb6a"
        },
        "date": 1696561215047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1279.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1021.535,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "b23d10ad65ef27a24ec46c6c1b0ba9947c177d4d",
          "message": "Apply editorial changes",
          "timestamp": "2023-10-07T00:19:47+08:00",
          "tree_id": "276e1f229edfbfaae3ccb00e972bccf3af89ffa7",
          "url": "https://github.com/sysprog21/rv32emu/commit/b23d10ad65ef27a24ec46c6c1b0ba9947c177d4d"
        },
        "date": 1696609593896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1024.827,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "c8d4acbf0edd6e9bb2de8b74cc577ef1acb25d29",
          "message": "Handle csr mstatus and misa correctly",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/243/commits/c8d4acbf0edd6e9bb2de8b74cc577ef1acb25d29"
        },
        "date": 1696657893305,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1325.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1024.756,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48278026+qwe661234@users.noreply.github.com",
            "name": "YenFuChen",
            "username": "qwe661234"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73ea55c376d5785f740dd7ff27118304efe06d12",
          "message": "Handle CSR MSTATUS and MISA correctly (#243)\n\nIn the privileged section of the RISC-V Architecture Test, we must\r\nconfigure the extensions specified in the Machine ISA (MISA) Register\r\nand set the Machine Status Register to privileged mode when invoking\r\nthe exception handler.\r\n\r\nWith this commit, all tests have passed successfully.",
          "timestamp": "2023-10-07T13:56:40+08:00",
          "tree_id": "1e9462c54f53f88b116576ded0f8ebe6fb30c987",
          "url": "https://github.com/sysprog21/rv32emu/commit/73ea55c376d5785f740dd7ff27118304efe06d12"
        },
        "date": 1696658623561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1023.706,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "b528364029b1d74cc2875fce18f1fe051775044d",
          "message": "Apply editorial changes",
          "timestamp": "2023-10-07T17:49:34+08:00",
          "tree_id": "3a661e56c13d23c0c9b5477df04ab46ab5492854",
          "url": "https://github.com/sysprog21/rv32emu/commit/b528364029b1d74cc2875fce18f1fe051775044d"
        },
        "date": 1696672617233,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1228.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 897.752,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "24e857a0c620f2174dbd19b3bbc2423594cf1d7f",
          "message": "Refactor detect_mem{set,cpy}\n\nThis commit decouples the instruction listings for mem{set,cpy} out of\nsrc/emulate.c, enhancing the maintainability of these listings.",
          "timestamp": "2023-10-09T02:12:46+08:00",
          "tree_id": "ae7dbddf20e8086ecfd05f9ce457bee5b062d183",
          "url": "https://github.com/sysprog21/rv32emu/commit/24e857a0c620f2174dbd19b3bbc2423594cf1d7f"
        },
        "date": 1696789430759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1276.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1020.681,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "e2a60b8626416bb1c5d78f51f4f47b4ebb021d19",
          "message": "Use shortcuts to access each field of specified instruction\n\nMacro IF_{insn,rd,rs1,rs2,imm} can be used respectively. In particular,\nit would be useful for writing macro-op fusion code.",
          "timestamp": "2023-10-09T02:57:36+08:00",
          "tree_id": "240fc6ca64fbf560ee7cf8ecbbc0dfb8bb53ab96",
          "url": "https://github.com/sysprog21/rv32emu/commit/e2a60b8626416bb1c5d78f51f4f47b4ebb021d19"
        },
        "date": 1696792169770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1307.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1025.138,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d0a2d8f4c71fa709c8b885c9f4f7f8cb751a0d2f",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/d0a2d8f4c71fa709c8b885c9f4f7f8cb751a0d2f"
        },
        "date": 1697016882343,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1303.71,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1023.061,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "8507c211c4b5f9a507f542b5b7ea401f90658cd7",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/8507c211c4b5f9a507f542b5b7ea401f90658cd7"
        },
        "date": 1697017277769,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1307.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1023.422,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "16b87b73c3cab2115ec48e93c691dd95f49adc35",
          "message": "Remove tailcall member in rv_insn_t",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/245/commits/16b87b73c3cab2115ec48e93c691dd95f49adc35"
        },
        "date": 1697032331516,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1088.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 855.891,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "669ab94f5a955689b1888ebd37dd74b3c0c71918",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/669ab94f5a955689b1888ebd37dd74b3c0c71918"
        },
        "date": 1697032443481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1227.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 897.896,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "ce9847aa280137b0474876e46976c8162d3b14ff",
          "message": "Remove tailcall member in rv_insn_t",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/245/commits/ce9847aa280137b0474876e46976c8162d3b14ff"
        },
        "date": 1697032462232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1162.28,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 929.887,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "1d8694b092827028c5c72c79c01bf6abba6e7586",
          "message": "Remove tailcall member in rv_insn_t",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/245/commits/1d8694b092827028c5c72c79c01bf6abba6e7586"
        },
        "date": 1697033370382,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1297.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1023.707,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "fbe2e4e6c81083236fe82d4e61ac3893b45d914e",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/fbe2e4e6c81083236fe82d4e61ac3893b45d914e"
        },
        "date": 1697033872413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1260.28,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1024.352,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b7fadcbc13e1bc15f72af58827f856683645ec62",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/b7fadcbc13e1bc15f72af58827f856683645ec62"
        },
        "date": 1697035274153,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1057.9,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 855.688,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0d25ef9702fbce7073a22b16edbe256c79d336e6",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/0d25ef9702fbce7073a22b16edbe256c79d336e6"
        },
        "date": 1697035749504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1292.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1024.476,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d33b31122974961f1b3885c8f4d2fd2cad0f7a4f",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/d33b31122974961f1b3885c8f4d2fd2cad0f7a4f"
        },
        "date": 1697035825165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1087.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 855.013,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "5a00a4e24d851f85b6c71ba7c3bdb2615aa70a7a",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/5a00a4e24d851f85b6c71ba7c3bdb2615aa70a7a"
        },
        "date": 1697035937061,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1289.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1022.821,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "66d4e3eb7b9dbd827d69b48dfff98f42b1148d5b",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/66d4e3eb7b9dbd827d69b48dfff98f42b1148d5b"
        },
        "date": 1697036303957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1024.586,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "8cf53b373689e084525184af11ea2bd1db4e22a0",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/8cf53b373689e084525184af11ea2bd1db4e22a0"
        },
        "date": 1697036588938,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1228.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 896.982,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3e637127a1ed853f789df7e4cbdcecf8c2a5f277",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/3e637127a1ed853f789df7e4cbdcecf8c2a5f277"
        },
        "date": 1697036610820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1305,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1023.585,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "c4faff18566ec50308dc73d6209d642a1888dab6",
          "message": "Manipulate csr_cycle, PC and insn_len by register",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/c4faff18566ec50308dc73d6209d642a1888dab6"
        },
        "date": 1697036758193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1103.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 861.432,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0c08a95e50c7e67ee180148873269082f99c462a",
          "message": "Manipulate csr_cycle and PC by registers. Drop insn_len",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/0c08a95e50c7e67ee180148873269082f99c462a"
        },
        "date": 1697095358647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1445.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1167.126,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "15ead60267e783ab51df9b6fb3ec4ec3ce95c534",
          "message": "Manipulate csr_cycle and PC by registers. Drop insn_len",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/244/commits/15ead60267e783ab51df9b6fb3ec4ec3ce95c534"
        },
        "date": 1697095523144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1240.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 991.182,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "7a188d14f31fc99a9d0710e42c3d723c19f84d11",
          "message": "Move block and IRs memory pool to rv",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/246/commits/7a188d14f31fc99a9d0710e42c3d723c19f84d11"
        },
        "date": 1697112237838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1452.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1135.818,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b49dca3e26e96dea40c3db21a3d25ffe7d46d85a",
          "message": "Move block and IRs memory pool to rv",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/246/commits/b49dca3e26e96dea40c3db21a3d25ffe7d46d85a"
        },
        "date": 1697116849657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1375.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1257.61,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b3ecce384ff6f8d79a683d9d75f2b1c1892b6e04",
          "message": "Move block and IRs memory pool to rv",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/246/commits/b3ecce384ff6f8d79a683d9d75f2b1c1892b6e04"
        },
        "date": 1697119331210,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1448.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1138.7,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "sysprog21",
            "username": "sysprog21"
          },
          "committer": {
            "name": "sysprog21",
            "username": "sysprog21"
          },
          "id": "e91506914501a58497c4045db29bf0228b41bd78",
          "message": "Enforce 'musttail' for assured tail call optimization",
          "timestamp": "2023-10-12T09:48:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/247/commits/e91506914501a58497c4045db29bf0228b41bd78"
        },
        "date": 1697125598079,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1379.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1255.403,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "e91506914501a58497c4045db29bf0228b41bd78",
          "message": "Enforce 'musttail' for assured tail call optimization\n\nThe 'musttail' attribute is enforced for return statements that yield\nthe result of a function call. This enhancement ensures more efficient\ncode generation by Clang.",
          "timestamp": "2023-10-12T15:37:03Z",
          "tree_id": "80542010b0b002003a4320aa36a3b76c77c972ab",
          "url": "https://github.com/sysprog21/rv32emu/commit/e91506914501a58497c4045db29bf0228b41bd78"
        },
        "date": 1697125638847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1243.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1052.455,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "925b587e726f1f96bad0f58dd4b65efc1ac55747",
          "message": "Simplify branch_{taken,untaken} and BRANCH_ macro\n\nThis commit does not introduce any functional changes; it is intended\nsolely as a cosmetic modification.",
          "timestamp": "2023-10-15T13:03:26+08:00",
          "tree_id": "51461885f6391d2632dbae06d790cb5f30dfa4d3",
          "url": "https://github.com/sysprog21/rv32emu/commit/925b587e726f1f96bad0f58dd4b65efc1ac55747"
        },
        "date": 1697346876772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1437.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1117.705,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "fdf30b69dfe49a69cc2210ed70f111c4df149747",
          "message": "Relax inline heuristics hints\n\nThis relaxation allows compiler optimization to perform certain kinds\nof code rearrangement that preserve the semantics of properly.",
          "timestamp": "2023-10-15T13:24:14+08:00",
          "tree_id": "3453636f8bcbdbf96aa7c84c8bf60ce9c744319d",
          "url": "https://github.com/sysprog21/rv32emu/commit/fdf30b69dfe49a69cc2210ed70f111c4df149747"
        },
        "date": 1697347894100,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1421.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1242.639,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "af02d17c9292f7c467030dc10dba9516a3066d41",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/af02d17c9292f7c467030dc10dba9516a3066d41"
        },
        "date": 1697444910406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1432.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1251.08,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "2cc3a1a8414a51fc0f6fa937c6ab6039dd44f19e",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/2cc3a1a8414a51fc0f6fa937c6ab6039dd44f19e"
        },
        "date": 1697461905255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1443,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1134.673,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "338b5dc86c995700dcbd61c40d89c743976f4c75",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/338b5dc86c995700dcbd61c40d89c743976f4c75"
        },
        "date": 1697461935355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1414.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1248.264,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d7f591f5a81e0b28efee0796449248919d693d6c",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/d7f591f5a81e0b28efee0796449248919d693d6c"
        },
        "date": 1697462052402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1426.57,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1248.494,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "a5cb3168cf6a06b58e70228be9012b0e12e5a965",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/a5cb3168cf6a06b58e70228be9012b0e12e5a965"
        },
        "date": 1697462122993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1450.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1135.534,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "98c45e6bc8065a4d5549bbba991d67ff65469710",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/98c45e6bc8065a4d5549bbba991d67ff65469710"
        },
        "date": 1697469387566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1424.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1247.916,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "ac7b467356bb8c9f7735a5e7d2a38dc4b1fa1f17",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/ac7b467356bb8c9f7735a5e7d2a38dc4b1fa1f17"
        },
        "date": 1697469541773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1414.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1243.022,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "c6e7e66f637bac5247b7cbcf223356577c19f59e",
          "message": "Unify the hash function of cache and map",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/249/commits/c6e7e66f637bac5247b7cbcf223356577c19f59e"
        },
        "date": 1697516479424,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1445.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1125.137,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "0337caae7de10cec3110b3f094649f90008182e7",
          "message": "Simplify file descriptor handling",
          "timestamp": "2023-10-26T15:08:00+08:00",
          "tree_id": "7da45019a8477e766a8b4b5fc15e8ae1d53c6af0",
          "url": "https://github.com/sysprog21/rv32emu/commit/0337caae7de10cec3110b3f094649f90008182e7"
        },
        "date": 1698304520922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1237,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1056.257,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "666b7eb697187a270d69e46aeacf788a33470e15",
          "message": "Apply editorial changes",
          "timestamp": "2023-10-26T17:18:55+08:00",
          "tree_id": "a86a2e71a9d0d5786c45f5a5cd1e7c97a000d13f",
          "url": "https://github.com/sysprog21/rv32emu/commit/666b7eb697187a270d69e46aeacf788a33470e15"
        },
        "date": 1698312302036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1404.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1164.239,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "87f11c299f8550168ac88ffe34b3a3d7e9a47b38",
          "message": "Improve the comments about mtval",
          "timestamp": "2023-10-27T21:17:05+08:00",
          "tree_id": "085dba789e021164882e03f4e81e7ccbe5953d29",
          "url": "https://github.com/sysprog21/rv32emu/commit/87f11c299f8550168ac88ffe34b3a3d7e9a47b38"
        },
        "date": 1698413059190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1174.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1053.546,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "912e62eac91bc78457d678494f4b90bbe8e996cf",
          "message": "Leave FIXME comment for libc substitution",
          "timestamp": "2023-10-28T17:34:12+08:00",
          "tree_id": "065df29b718ab696bf54afdd74ffb0f0fbe4f4a4",
          "url": "https://github.com/sysprog21/rv32emu/commit/912e62eac91bc78457d678494f4b90bbe8e996cf"
        },
        "date": 1698486032176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1411.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1107.205,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "66d4f4399d78fff457dfe7cb0e4651a2dd388921",
          "message": "Fix NULL pointer dereference in remove_next_nth_ir()",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/255/commits/66d4f4399d78fff457dfe7cb0e4651a2dd388921"
        },
        "date": 1699101717144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1720,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.22,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "a882d74760710e6458e494273de60c2027ec1255",
          "message": "Fix NULL pointer dereference in remove_next_nth_ir()",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/255/commits/a882d74760710e6458e494273de60c2027ec1255"
        },
        "date": 1699186710251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1069.319,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "7bde049523468b333252a16282b363e863521f24",
          "message": "Fix the inaccuracy in the number of IR elements to be removed",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/256/commits/7bde049523468b333252a16282b363e863521f24"
        },
        "date": 1699190818396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1604,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1500.599,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "7ffd089e94a44908e78b465db74fdbe7a6d89781",
          "message": "Fix the inaccuracy in the number of IR elements to be removed",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/256/commits/7ffd089e94a44908e78b465db74fdbe7a6d89781"
        },
        "date": 1699195098067,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1787.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1539.987,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "03ec122b95d67426e26a69287544ab2932ac31b3",
          "message": "Fix the inaccuracy in the number of IR elements to be removed",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/256/commits/03ec122b95d67426e26a69287544ab2932ac31b3"
        },
        "date": 1699195220770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1583,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1292.169,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "c1740075cef723207741c798236ea745953f16de",
          "message": "Add comments about load/store instructions",
          "timestamp": "2023-11-06T02:22:41+08:00",
          "tree_id": "60a355f8fff3c00629d6cd22f847276733e5897d",
          "url": "https://github.com/sysprog21/rv32emu/commit/c1740075cef723207741c798236ea745953f16de"
        },
        "date": 1699208945604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1529.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1132.072,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "f18fed70b370dc2e2e8230b60f5d2b40fdb8ce52",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/f18fed70b370dc2e2e8230b60f5d2b40fdb8ce52"
        },
        "date": 1699642834574,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1557,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1144.623,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "311a100f70b6b09cacec3b2fcf397a3421e70f5b",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/311a100f70b6b09cacec3b2fcf397a3421e70f5b"
        },
        "date": 1699643752196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1485.85,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1124.118,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "6fee4fb3c39edbc0e79448f64e2fdc7904f7f1fe",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/6fee4fb3c39edbc0e79448f64e2fdc7904f7f1fe"
        },
        "date": 1699708434610,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1745.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1486.584,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "84f93acd4002706e5a6ce4b837242d7ac2dfcb89",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/84f93acd4002706e5a6ce4b837242d7ac2dfcb89"
        },
        "date": 1699717675132,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1679,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1485.616,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "d31e18c2eed5d46dbe0ec642d8411b0e4c47b632",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/d31e18c2eed5d46dbe0ec642d8411b0e4c47b632"
        },
        "date": 1699718271475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1740,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1474.369,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "22decfc784e0bbb6912cb8dc3214cba5df5fed16",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/22decfc784e0bbb6912cb8dc3214cba5df5fed16"
        },
        "date": 1699725947024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1703.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1481.281,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "27f3da244d1c405c69b76a6174621dd40660cefb",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/27f3da244d1c405c69b76a6174621dd40660cefb"
        },
        "date": 1699731647944,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1567.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1155.8,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "9ebd8fa9fed64812a70bd295198f0c89cbd639e1",
          "message": "Comprehensive F extension support with SoftFloat integration",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/260/commits/9ebd8fa9fed64812a70bd295198f0c89cbd639e1"
        },
        "date": 1699734086504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1736.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1478.631,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "45bf7e2ec1636cb5dad5a3768c9c978507ccc918",
          "message": "Remove unused 'isnanf' and 'isinff' functions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/262/commits/45bf7e2ec1636cb5dad5a3768c9c978507ccc918"
        },
        "date": 1699741797484,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1567,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1149.915,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "ebf2362e1867a8c4ca4038fcd9725ba0e1d91d06",
          "message": "Fix decode annotation error",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/264/commits/ebf2362e1867a8c4ca4038fcd9725ba0e1d91d06"
        },
        "date": 1700092097871,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1717.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1431.712,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "88f6e1b6521d66db296054f5e6f69026e15ae781",
          "message": "Fix a potential issue where the block_find() might return NULL",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/265/commits/88f6e1b6521d66db296054f5e6f69026e15ae781"
        },
        "date": 1700099306789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1714.14,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1443.153,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "88f6e1b6521d66db296054f5e6f69026e15ae781",
          "message": "Fix a potential issue where the block_find() might return NULL",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/265/commits/88f6e1b6521d66db296054f5e6f69026e15ae781"
        },
        "date": 1700104722612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1668.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1431.286,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "c9dda3fcd57f2549d256709077448e859223b23a",
          "message": "Improve comments for RV32I instructions",
          "timestamp": "2023-11-16T12:19:43+08:00",
          "tree_id": "ccd023617e18ac11f497053b7cfe0e6acb274708",
          "url": "https://github.com/sysprog21/rv32emu/commit/c9dda3fcd57f2549d256709077448e859223b23a"
        },
        "date": 1700108724201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1566.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.212,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "42c10f616cbd0fa57ada17b3f7996db23493263c",
          "message": "Fix softfloat build failure",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/266/commits/42c10f616cbd0fa57ada17b3f7996db23493263c"
        },
        "date": 1700160939193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1577.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1435.919,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "129aca275f5036b3cd4fda3a3cfdcac525c9de10",
          "message": "Fix softfloat build failure",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/266/commits/129aca275f5036b3cd4fda3a3cfdcac525c9de10"
        },
        "date": 1700161805910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1723.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1447.526,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "69e45054dd5914822596a5d9b7441a3fad03843f",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/69e45054dd5914822596a5d9b7441a3fad03843f"
        },
        "date": 1700383873056,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1733.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1437.66,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3d2bcff405e211cef7b366cae3ce392710698619",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/3d2bcff405e211cef7b366cae3ce392710698619"
        },
        "date": 1700469777078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1668.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1436.513,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "fa3514c66ca44ed07935290cf4c94e2d74c13595",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/fa3514c66ca44ed07935290cf4c94e2d74c13595"
        },
        "date": 1700469860614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1669.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1434.4,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "a5a4222a26cedbfef5ed5461ccea58dbd6042941",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/a5a4222a26cedbfef5ed5461ccea58dbd6042941"
        },
        "date": 1700484922850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1740.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1447.863,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "561c4c79cb97c4eef1431c9b3727a018f1cf8aed",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/561c4c79cb97c4eef1431c9b3727a018f1cf8aed"
        },
        "date": 1700558160689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1738.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1442.523,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b24431ca25e71f7e8d9c409e83ad1d06e8404ebc",
          "message": "Apply branch prediction for indirect jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/269/commits/b24431ca25e71f7e8d9c409e83ad1d06e8404ebc"
        },
        "date": 1700558237158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1726.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1443.45,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "f1b5279e27f56257b3889a6515c73f6b1b127c92",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/f1b5279e27f56257b3889a6515c73f6b1b127c92"
        },
        "date": 1700662954681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1621.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1518.021,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "af524d2da697e03b39a6adbef48b7a4836cbb73a",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/af524d2da697e03b39a6adbef48b7a4836cbb73a"
        },
        "date": 1700665594170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1759.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.036,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "eafabd4fefb05fcffc01148a150a35f1bbc91bf0",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/eafabd4fefb05fcffc01148a150a35f1bbc91bf0"
        },
        "date": 1700665766460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1611.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.229,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "03691023a58cad109be148ab6cb76d565291f5af",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/03691023a58cad109be148ab6cb76d565291f5af"
        },
        "date": 1700667963298,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1729.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1525.137,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "03691023a58cad109be148ab6cb76d565291f5af",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/03691023a58cad109be148ab6cb76d565291f5af"
        },
        "date": 1700668229982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1767,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1514.876,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "committer": {
            "name": "RinHizakura",
            "username": "RinHizakura"
          },
          "id": "f82f13391a8da4b5aec40b271d4e7f1b16e6d3a7",
          "message": "Improve efficiency of branch history table",
          "timestamp": "2023-02-23T15:04:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/271/commits/f82f13391a8da4b5aec40b271d4e7f1b16e6d3a7"
        },
        "date": 1700670359165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1759,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1520.096,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "e37b1daf8d7f5f2b48a1aca5fdeadb424ad8a9bd",
          "message": "Introduce baseline tiered1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/e37b1daf8d7f5f2b48a1aca5fdeadb424ad8a9bd"
        },
        "date": 1702382194592,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1643.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.162,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "bb5b126a80cd84f197de4d391e83367a9fd98563",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/bb5b126a80cd84f197de4d391e83367a9fd98563"
        },
        "date": 1702443961815,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1795.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.547,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "2143749fa6f2fb790f028c6d9530fa3b3c324700",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/2143749fa6f2fb790f028c6d9530fa3b3c324700"
        },
        "date": 1702453967690,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1660.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.048,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "34d1bdf088b7304b135a52f8798fae001282be2d",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/34d1bdf088b7304b135a52f8798fae001282be2d"
        },
        "date": 1702453995588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1636.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.358,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "ee66f7f91f947967e20ef31e956191471313fec9",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/ee66f7f91f947967e20ef31e956191471313fec9"
        },
        "date": 1702454325506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1789.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.749,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "b52269fe1476ff4ef04bed889d3607a7c7c8873a",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/b52269fe1476ff4ef04bed889d3607a7c7c8873a"
        },
        "date": 1702456961479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1806.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.177,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "e80b8e19c71d0e6ab2e7a8bdb799bdba49fd26ed",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/e80b8e19c71d0e6ab2e7a8bdb799bdba49fd26ed"
        },
        "date": 1702456971286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1685.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.361,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "1b7fb89f610cc053ee3233bb12d0e75b5c652c16",
          "message": "Introduce a tiered-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/1b7fb89f610cc053ee3233bb12d0e75b5c652c16"
        },
        "date": 1702457976884,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1638.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1492.39,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "96e0b9683ea50cbcd684a4fb026338856123630d",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/96e0b9683ea50cbcd684a4fb026338856123630d"
        },
        "date": 1702528256063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1710.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.745,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "f2af0f1076f1ab55230c73376394da5d57615243",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/f2af0f1076f1ab55230c73376394da5d57615243"
        },
        "date": 1702535147722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1798.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1488.265,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "36d6142f72aa2a8febeda12c0c696b21879c1d7b",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/36d6142f72aa2a8febeda12c0c696b21879c1d7b"
        },
        "date": 1702536163226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1659.14,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.69,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0868eaadeda9d9ada2cb69e5cc87ff62d9dff502",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/0868eaadeda9d9ada2cb69e5cc87ff62d9dff502"
        },
        "date": 1702536417050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1645,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.937,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "748d3265547579c9539854a7dd016fc3e760ad40",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/748d3265547579c9539854a7dd016fc3e760ad40"
        },
        "date": 1702536559847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1791.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.467,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "2a9585d59d456a4abdb3cee86c6caf3a0d08d8f8",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/2a9585d59d456a4abdb3cee86c6caf3a0d08d8f8"
        },
        "date": 1702536679670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1756,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1485.8,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "bdf96a4487a0d12bde1ba23fdc2f26815875b755",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/bdf96a4487a0d12bde1ba23fdc2f26815875b755"
        },
        "date": 1702537436914,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1806.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1510.993,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "165f036e0e29b55524b3c7f79f8f5d58a9149c60",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/165f036e0e29b55524b3c7f79f8f5d58a9149c60"
        },
        "date": 1702546038850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1742.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.633,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "22cf901ef6cd52dfe792f83718cf9b7eb269b830",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/22cf901ef6cd52dfe792f83718cf9b7eb269b830"
        },
        "date": 1702549202247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1809.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1483.493,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "51e84b7eaca6a83c5a9a235faba35e1dbb82cfe1",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/51e84b7eaca6a83c5a9a235faba35e1dbb82cfe1"
        },
        "date": 1702558323965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1795.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.321,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d402886faba0bcea10598da7cb1a9b578d67540e",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/d402886faba0bcea10598da7cb1a9b578d67540e"
        },
        "date": 1702564294781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1680,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.796,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "28c6a657e970fd597472e8dd187c838a82894322",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/28c6a657e970fd597472e8dd187c838a82894322"
        },
        "date": 1702640493819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.307,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "8921d4e2b3ccb6e7771ee07126323d56dab7eb11",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/8921d4e2b3ccb6e7771ee07126323d56dab7eb11"
        },
        "date": 1702640858735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1797.57,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.735,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "49f89a1216939ebd29d89f02493bc8d0696a8f27",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/49f89a1216939ebd29d89f02493bc8d0696a8f27"
        },
        "date": 1702641494171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1694.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.971,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "42fbdd1c0b0e4fba664971f41937f0d505370758",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/42fbdd1c0b0e4fba664971f41937f0d505370758"
        },
        "date": 1702641867939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1620.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1485.787,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "49f89a1216939ebd29d89f02493bc8d0696a8f27",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/49f89a1216939ebd29d89f02493bc8d0696a8f27"
        },
        "date": 1702641945951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1805.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1511.638,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "1b0118dab629249b404534a7d9ed93f70ba6c68a",
          "message": "Fix constant optimization on RV32F instructions",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/292/commits/1b0118dab629249b404534a7d9ed93f70ba6c68a"
        },
        "date": 1702641984285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1637.42,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.403,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3aa197b2bb2ea83ca9b4e1bc23bc241fd105ec6f",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/3aa197b2bb2ea83ca9b4e1bc23bc241fd105ec6f"
        },
        "date": 1702644473012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1488.022,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "042ac1c7fa5d7762af70102858a829871d7fa27f",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/042ac1c7fa5d7762af70102858a829871d7fa27f"
        },
        "date": 1702647493386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1808.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.575,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "dc800054af4d48fde35bec465826c6a476a231ae",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/dc800054af4d48fde35bec465826c6a476a231ae"
        },
        "date": 1702648367336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1792,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.137,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "03cdb982f76e3fd0fd51751c90da56bc6651fed5",
          "message": "Introduce a tier-1 JIT compiler based on x86-64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/289/commits/03cdb982f76e3fd0fd51751c90da56bc6651fed5"
        },
        "date": 1702648513529,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1638.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.067,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "883ae8b0df0244c194746965ae33464c000b1b98",
          "message": "Refine documentation for JIT compiler",
          "timestamp": "2023-12-16T21:24:12+08:00",
          "tree_id": "e93a8547065bed553be44df00e56ddcae0f916ea",
          "url": "https://github.com/sysprog21/rv32emu/commit/883ae8b0df0244c194746965ae33464c000b1b98"
        },
        "date": 1702733413090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1466.165,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "405aa086fcc1271b0d6cd20397b3bc6fdf7e9e81",
          "message": "Refine documentation for JIT compiler",
          "timestamp": "2023-12-16T23:31:37+08:00",
          "tree_id": "0e8c48d9de8f3cc6f200ecf33b945ed2c43fc6fb",
          "url": "https://github.com/sysprog21/rv32emu/commit/405aa086fcc1271b0d6cd20397b3bc6fdf7e9e81"
        },
        "date": 1702740996887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1758.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1460.233,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "f9c03c5db49fa47c669c54daebbc4d7975617fa5",
          "message": "Refine documentation for JIT compiler",
          "timestamp": "2023-12-16T23:34:54+08:00",
          "tree_id": "8cd303ec0d64b570bf3652d47fac159357912eef",
          "url": "https://github.com/sysprog21/rv32emu/commit/f9c03c5db49fa47c669c54daebbc4d7975617fa5"
        },
        "date": 1702741199927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1462.302,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "62f12cc4352d1cd0635af2b4fb63fb4ba83c860e",
          "message": "Refine documentation for JIT compiler",
          "timestamp": "2023-12-16T23:39:34+08:00",
          "tree_id": "1ec9fac3f5916c02976c1d9aae38bfdcfe168625",
          "url": "https://github.com/sysprog21/rv32emu/commit/62f12cc4352d1cd0635af2b4fb63fb4ba83c860e"
        },
        "date": 1702741474535,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1469.089,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "6d87fd662f52874a8c9c39f82d2d116477da2042",
          "message": "Refine documentation for JIT compiler",
          "timestamp": "2023-12-16T23:42:45+08:00",
          "tree_id": "6b150662f379881c3b52ae96848037f348c69486",
          "url": "https://github.com/sysprog21/rv32emu/commit/6d87fd662f52874a8c9c39f82d2d116477da2042"
        },
        "date": 1702741668418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1677.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1466.401,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "08d24957ea8287e01877238d47828e20e51e04a1",
          "message": "Indent properly",
          "timestamp": "2023-12-20T13:40:44+08:00",
          "tree_id": "16e59f29a32f904f4a0586955cf53db4ab13a70c",
          "url": "https://github.com/sysprog21/rv32emu/commit/08d24957ea8287e01877238d47828e20e51e04a1"
        },
        "date": 1703051418721,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1807.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1475.885,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "b3e2809ea6f4e8812e0549a3e23a4efdab372a63",
          "message": "Clean up",
          "timestamp": "2023-12-20T13:56:24+08:00",
          "tree_id": "2c62fd34f7dd3be699e85f3844bb3b9a6e3451c9",
          "url": "https://github.com/sysprog21/rv32emu/commit/b3e2809ea6f4e8812e0549a3e23a4efdab372a63"
        },
        "date": 1703052090495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1622.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1453.167,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "87df0797bebfce75a0e35732d637f88dd351698a",
          "message": "Indent properly",
          "timestamp": "2023-12-22T10:15:55+08:00",
          "tree_id": "94364051c2749c81bd032ac995bfb656f326002b",
          "url": "https://github.com/sysprog21/rv32emu/commit/87df0797bebfce75a0e35732d637f88dd351698a"
        },
        "date": 1703211677440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1475.659,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv@ccns.ncku.edu.tw",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "7b07977866e88d1821bf018dd8da5d7cb145980e",
          "message": "Indent properly",
          "timestamp": "2023-12-22T11:35:18+08:00",
          "tree_id": "5463437555345212222390a62112bde0968efa14",
          "url": "https://github.com/sysprog21/rv32emu/commit/7b07977866e88d1821bf018dd8da5d7cb145980e"
        },
        "date": 1703216415220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1806.4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.573,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "daa7750787d76381faad8c77618f6bee1c274a7f",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/daa7750787d76381faad8c77618f6bee1c274a7f"
        },
        "date": 1703256909822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1790.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1475.146,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "id": "7061353b610263e55630f7780775ad73b7fa5ad2",
          "message": "Consolidate public header by integrating src/state.h",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/305/commits/7061353b610263e55630f7780775ad73b7fa5ad2"
        },
        "date": 1703265787637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1792,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1474.449,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "id": "3c7835cb79b5c8ed59313f22c0c34a3faebe9640",
          "message": "Consolidate public header by integrating src/state.h",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/305/commits/3c7835cb79b5c8ed59313f22c0c34a3faebe9640"
        },
        "date": 1703265929085,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1781.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1468.952,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "8ba165ae9753a4680c138b5053aec8611cb66892",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/8ba165ae9753a4680c138b5053aec8611cb66892"
        },
        "date": 1703313298407,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1794.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1512.029,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "648283df2a865282c34796fe924afd58d3401c64",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/648283df2a865282c34796fe924afd58d3401c64"
        },
        "date": 1703318146090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1785.42,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1527.921,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "79965eb14f300953e9615f3eb66a04c59211bd56",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/79965eb14f300953e9615f3eb66a04c59211bd56"
        },
        "date": 1703318245862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1780.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1522.615,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "id": "5d37c4eba7078e409f462376968675b4e91e542c",
          "message": "Consolidate memory allocation",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/307/commits/5d37c4eba7078e409f462376968675b4e91e542c"
        },
        "date": 1703409581001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1529.294,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3d38ec31c9258cd5e66f4a7d1373df5798e5247a",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/3d38ec31c9258cd5e66f4a7d1373df5798e5247a"
        },
        "date": 1703412212588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1784.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1519.935,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "6839f0e0bcda091505f2b05c3753b60d6b55795e",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/6839f0e0bcda091505f2b05c3753b60d6b55795e"
        },
        "date": 1703425084920,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1667.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1526.678,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3f93719f9fc9781290c2608ba5365e0e63dbf4ba",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/3f93719f9fc9781290c2608ba5365e0e63dbf4ba"
        },
        "date": 1703425618406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1652.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1512.181,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "183db2bdcba0ec33582e54ffcd19ae60eaec639f",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/183db2bdcba0ec33582e54ffcd19ae60eaec639f"
        },
        "date": 1703426752473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1792.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.789,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0068d949485639914582c4b96125b78d1c253517",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/0068d949485639914582c4b96125b78d1c253517"
        },
        "date": 1703427578283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1780.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1512.905,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "629e93c1b460e02818845c41d886a620f6082525",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/629e93c1b460e02818845c41d886a620f6082525"
        },
        "date": 1703428140569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1792.9,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1517.021,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d03e43f882be642724c3b47bc7cdf807699b5bca",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/d03e43f882be642724c3b47bc7cdf807699b5bca"
        },
        "date": 1703429170827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1782.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1534.428,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "98ccf06cac05fe54ab7f4fd45dbb7dbce6e4fea0",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/98ccf06cac05fe54ab7f4fd45dbb7dbce6e4fea0"
        },
        "date": 1703437247656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1789.2,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1523.871,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "92706cebfe5a9db42079611c28d32291d1f397a8",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/92706cebfe5a9db42079611c28d32291d1f397a8"
        },
        "date": 1703439317149,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1667.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1524.028,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "73ac6888073afb4d758715530d8d683a24a7bbd4",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/73ac6888073afb4d758715530d8d683a24a7bbd4"
        },
        "date": 1703439407829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1644.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1519.533,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "fba45a3e605603fa44a1dff9cea5753bb17dc10d",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/fba45a3e605603fa44a1dff9cea5753bb17dc10d"
        },
        "date": 1703480892526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1532.426,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "bfec76d54e1392b22426e6e3919eee4c7c8b4b7d",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/bfec76d54e1392b22426e6e3919eee4c7c8b4b7d"
        },
        "date": 1703480953528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1761.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1526.54,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3c9074acf5639335794286fc02bc9d2bca8cbc90",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/3c9074acf5639335794286fc02bc9d2bca8cbc90"
        },
        "date": 1703481622682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1786.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1533.027,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "1c3034693978d847095b5641bf4d923b2bd0bf3f",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/1c3034693978d847095b5641bf4d923b2bd0bf3f"
        },
        "date": 1703482247600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1788.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1514.884,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "406a4dcb4d34a52e1ba3aa85fd47482692e99546",
          "message": "Introduce a tier-1 JIT compiler based on aarch64 architecture",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/304/commits/406a4dcb4d34a52e1ba3aa85fd47482692e99546"
        },
        "date": 1703489508746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1800,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1510.077,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "id": "9193105c12a7be064d45228d44a3c73660a25473",
          "message": "Consolidate memory allocation",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/307/commits/9193105c12a7be064d45228d44a3c73660a25473"
        },
        "date": 1703508586838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1670.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1519.987,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "5549d79e95166147227235806996ba64fcf93ce3",
          "message": "Improve JIT compiler description",
          "timestamp": "2023-12-30T17:13:26+08:00",
          "tree_id": "56f68b29ce93d67809456f732d70bd0d35533b7d",
          "url": "https://github.com/sysprog21/rv32emu/commit/5549d79e95166147227235806996ba64fcf93ce3"
        },
        "date": 1703927910377,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1805.8,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1515.569,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "29e8da72a3522dd886dc5271c64b0a99bfdd151c",
          "message": "Fix invalid free and memory leak",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/314/commits/29e8da72a3522dd886dc5271c64b0a99bfdd151c"
        },
        "date": 1704023913073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1510.57,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "f1a868bfda6152280c9434583e7d9cfd21b052d1",
          "message": "Fix invalid free and memory leak",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/314/commits/f1a868bfda6152280c9434583e7d9cfd21b052d1"
        },
        "date": 1704027437491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1656.4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1526.33,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "a3a5f63c26c89c797d0a0408dbdaa23c512fd75f",
          "message": "Fix invalid free and memory leak",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/314/commits/a3a5f63c26c89c797d0a0408dbdaa23c512fd75f"
        },
        "date": 1704033913236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1801.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1527.57,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "d61dc9bd6f065064978f22aafa10b7e9ac3e66d0",
          "message": "Fix invalid free and memory leak",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/314/commits/d61dc9bd6f065064978f22aafa10b7e9ac3e66d0"
        },
        "date": 1704034078731,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1796.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1523.267,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "e2ae98e28f777c5e7c4f2dbdc540fa458defd00a",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/e2ae98e28f777c5e7c4f2dbdc540fa458defd00a"
        },
        "date": 1704131596566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1791,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1514.458,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "4d09ab6d752de9ef5db20437cd5eebd6023158a5",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/4d09ab6d752de9ef5db20437cd5eebd6023158a5"
        },
        "date": 1704134434568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1799.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1516.001,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "8436338fd584f85bdcd5b3712afc4365824e5ccd",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/8436338fd584f85bdcd5b3712afc4365824e5ccd"
        },
        "date": 1704135034648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1777.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1513.162,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "cb3dd06786430fe1c784d498499494be4ce6f326",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/cb3dd06786430fe1c784d498499494be4ce6f326"
        },
        "date": 1704218524289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1644.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1522.848,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "ec18ba5b4d28fbd94b393a16fa12c7cc22a417be",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/ec18ba5b4d28fbd94b393a16fa12c7cc22a417be"
        },
        "date": 1704219066960,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1635.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1517.836,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "0e1e363ba1b60cefb4de573579c417fa63c1993d",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/0e1e363ba1b60cefb4de573579c417fa63c1993d"
        },
        "date": 1704223325616,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1806.4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1520.91,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "cc5fbad5d363d2dc9ee4bca85c8e41ea2a76fa8c",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/cc5fbad5d363d2dc9ee4bca85c8e41ea2a76fa8c"
        },
        "date": 1704266962923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1675.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1518.768,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "committer": {
            "email": "jserv.tw@gmail.com",
            "name": "Jim Huang",
            "username": "jserv"
          },
          "distinct": true,
          "id": "8eced3b006f47b4ba6d9495d935f6871db3fdd10",
          "message": "Refine clang-format style\n\nAttributeMacros: A vector of strings that should be interpreted as\nattributes/qualifiers instead of identifiers.\n\nStatementAttributeLikeMacros: Macros which are ignored in front of\na statement, as if they were an attribute.\n\nStatementMacros: Typical macros are expressions, and require a\nsemi-colon to be added; sometimes this is not the case, and this\nallows to make clang-format aware of such cases.",
          "timestamp": "2024-01-03T17:33:26+08:00",
          "tree_id": "179e23eefd03ee0fab862766aaeba4914cb8c8a0",
          "url": "https://github.com/sysprog21/rv32emu/commit/8eced3b006f47b4ba6d9495d935f6871db3fdd10"
        },
        "date": 1704275046207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1694.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1520.039,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "f43ec4b14c38100e547c4bcd9a791ff3d4269111",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/f43ec4b14c38100e547c4bcd9a791ff3d4269111"
        },
        "date": 1704294187369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1645.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1510.875,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "7a3740acd7d7d384888b1831eda6fc7eec0d0420",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/7a3740acd7d7d384888b1831eda6fc7eec0d0420"
        },
        "date": 1704377030992,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1795.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1521.159,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "43d8615cbd10724220c939fbfbe5f79408d91fbd",
          "message": "Fix alignment exceptions issue for F and C extensions",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/317/commits/43d8615cbd10724220c939fbfbe5f79408d91fbd"
        },
        "date": 1704378937156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1784.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1515.902,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "3fb62a25acb7173c3594a5057a271c320725e67e",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/3fb62a25acb7173c3594a5057a271c320725e67e"
        },
        "date": 1704529745947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1652.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1517.306,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "ffca3fef26ffe81d6ddc8a530c467f20935a7236",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/ffca3fef26ffe81d6ddc8a530c467f20935a7236"
        },
        "date": 1704531289027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1601.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.682,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "dad795505b6ac18d29d2e077bf926e5127079b64",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/dad795505b6ac18d29d2e077bf926e5127079b64"
        },
        "date": 1704532697512,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1755,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.229,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "0df83e314b57e0e37de3ce3adea16447e69e17fb",
          "message": "Support RV32FC",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/316/commits/0df83e314b57e0e37de3ce3adea16447e69e17fb"
        },
        "date": 1704549871440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1653.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1522.872,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "194846cc0081e55627434c183c7bece40d1a26db",
          "message": "Fix rounding mode selection",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/323/commits/194846cc0081e55627434c183c7bece40d1a26db"
        },
        "date": 1704553575847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1621.3,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1484.53,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "92396523583ffc0e2256cfa64b9e83f0da5127d9",
          "message": "Fix rounding mode selection",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/323/commits/92396523583ffc0e2256cfa64b9e83f0da5127d9"
        },
        "date": 1704555960410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1753.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1472.295,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "7bd41e3d354d90e5aca726059c3d7f7b523376a1",
          "message": "Fix rounding mode selection",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/323/commits/7bd41e3d354d90e5aca726059c3d7f7b523376a1"
        },
        "date": 1704555985977,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1737.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.549,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "a00aeeabe672e04777faf5680ca100f5353ff323",
          "message": "Fix rounding mode selection",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/323/commits/a00aeeabe672e04777faf5680ca100f5353ff323"
        },
        "date": 1704557318774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1625.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1485.413,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "committer": {
            "name": "visitorckw",
            "username": "visitorckw"
          },
          "id": "32895fbe49dc754ab489e82b80bc261588cccdb5",
          "message": "Fix signed integer overflow in RV32IM",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/324/commits/32895fbe49dc754ab489e82b80bc261588cccdb5"
        },
        "date": 1704571442609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1614.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1526.805,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "committer": {
            "name": "fourcolor",
            "username": "fourcolor"
          },
          "id": "cfc89a1ac9b188e5b876fb54e8aa0f21509143f9",
          "message": "Fix cmv constant optimize bug",
          "timestamp": "2023-11-14T16:56:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/325/commits/cfc89a1ac9b188e5b876fb54e8aa0f21509143f9"
        },
        "date": 1704600717151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1628.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1513.913,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james1qaz2wsx12qw@gmail.com",
            "name": "Shih-Sheng Yang",
            "username": "fourcolor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dad720dbb5cab3009f22995fbab3243f2e2566e",
          "message": "Fix cmv constant optimize bug (#325)",
          "timestamp": "2024-01-07T12:38:31+08:00",
          "tree_id": "645d55a9692b6677b223a69c4efd80d8dae2b625",
          "url": "https://github.com/sysprog21/rv32emu/commit/6dad720dbb5cab3009f22995fbab3243f2e2566e"
        },
        "date": 1704602607573,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1626.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1480.653,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "ed7397f73697ba5e37fcb9306017af0f4ba3f011",
          "message": "Fix file descriptor resource leaks",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/ed7397f73697ba5e37fcb9306017af0f4ba3f011"
        },
        "date": 1704929586677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1774.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.229,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "2c24ed6929e36d192748289c8157611043bd7e7f",
          "message": "Fix file descriptor resource leaks",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/2c24ed6929e36d192748289c8157611043bd7e7f"
        },
        "date": 1704930685670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1704.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.334,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "3ce09280a959c3d03c339c34fad7523b5b2a1ccb",
          "message": "Fix file descriptor resource leaks",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/3ce09280a959c3d03c339c34fad7523b5b2a1ccb"
        },
        "date": 1704931351149,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1670.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.491,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "committer": {
            "name": "henrybear327",
            "username": "henrybear327"
          },
          "id": "f02b041b165629e8c8510f11205072bb8f59662a",
          "message": "Fix bugs caught by infer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/f02b041b165629e8c8510f11205072bb8f59662a"
        },
        "date": 1704932303808,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1777,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.012,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "605fd78b156187aa4327c06bf156f56d63dcf8fd",
          "message": "Doubly-link chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/605fd78b156187aa4327c06bf156f56d63dcf8fd"
        },
        "date": 1705763795398,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1487.216,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "5c6a87a9fcac0843885a0534d58b9eb32df50ef3",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/5c6a87a9fcac0843885a0534d58b9eb32df50ef3"
        },
        "date": 1705764049152,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1661.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.526,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "3612494edab62fa25a0426809935c3d802d92147",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/3612494edab62fa25a0426809935c3d802d92147"
        },
        "date": 1705765474936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1623.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.794,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "0233a3d26127025ff3e740d35af84ffbd07854bf",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/0233a3d26127025ff3e740d35af84ffbd07854bf"
        },
        "date": 1705765854458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1770,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.992,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d1b9c2c3165f70a96f6a95855a884c53d624fdd3",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/d1b9c2c3165f70a96f6a95855a884c53d624fdd3"
        },
        "date": 1705766072018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1791,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.89,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "d5d07ac41cbc4d91ad0b18134ed0e6c81c35bbdf",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/d5d07ac41cbc4d91ad0b18134ed0e6c81c35bbdf"
        },
        "date": 1705766155649,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1641.3,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.262,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "467660a4ae02104785383aa141c5fa8b57fff25b",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/467660a4ae02104785383aa141c5fa8b57fff25b"
        },
        "date": 1705766297065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1638.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1468.348,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "committer": {
            "name": "qwe661234",
            "username": "qwe661234"
          },
          "id": "e266b69ee5d60f28e14b8eadd94d4192d8861ee2",
          "message": "Enforce doubly-linked chained block",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/331/commits/e266b69ee5d60f28e14b8eadd94d4192d8861ee2"
        },
        "date": 1705766605709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1779.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.914,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      }
    ]
  }
}