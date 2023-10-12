window.BENCHMARK_DATA = {
  "lastUpdate": 1697095523720,
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
      }
    ]
  }
}