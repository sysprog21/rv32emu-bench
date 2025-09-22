window.BENCHMARK_DATA = {
  "lastUpdate": 1758564565297,
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
          "id": "228344ace24936f066d7001f4cfe1896080172ff",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/228344ace24936f066d7001f4cfe1896080172ff"
        },
        "date": 1705822642289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1637.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1487.323,
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
          "id": "9faaedc0bb91bcf2f8c77e9f51e09abccdc74d54",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/9faaedc0bb91bcf2f8c77e9f51e09abccdc74d54"
        },
        "date": 1705839528590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1695.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1497.89,
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
          "id": "16adbc90a6826badc74069b54652e6f91bb77002",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/16adbc90a6826badc74069b54652e6f91bb77002"
        },
        "date": 1705932691924,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1628.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1477.877,
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
          "id": "473babfc2321be42f45ba4ea29160648fac4b7b5",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/473babfc2321be42f45ba4ea29160648fac4b7b5"
        },
        "date": 1705933754412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1769.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.348,
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
          "id": "1b0be9dd949cdb7077f53f76e284f2da03277071",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/1b0be9dd949cdb7077f53f76e284f2da03277071"
        },
        "date": 1705970693837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1629.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1475.074,
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
          "id": "49938f060f009bb760f77c4e8748857d2ec31dd0",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/49938f060f009bb760f77c4e8748857d2ec31dd0"
        },
        "date": 1705970813151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1629.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1470.627,
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
          "id": "6bf43c39cc80d8e5b928ff28c40c7b4b0aee9b99",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/6bf43c39cc80d8e5b928ff28c40c7b4b0aee9b99"
        },
        "date": 1705994185130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1620.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.678,
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
          "id": "1ef4680d64af5e2af5ccf5c5ca81a92871b9ccd1",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/1ef4680d64af5e2af5ccf5c5ca81a92871b9ccd1"
        },
        "date": 1706010897181,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1698.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.76,
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
          "id": "b8b8db8b2f5447eaf3afdb4814c9f25b4605e51a",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/b8b8db8b2f5447eaf3afdb4814c9f25b4605e51a"
        },
        "date": 1706011264377,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1778.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.857,
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
          "id": "c673d173fc6e34d66ae9dc7026f0338c5f0ed762",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/c673d173fc6e34d66ae9dc7026f0338c5f0ed762"
        },
        "date": 1706087275918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1777.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.488,
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
          "id": "4cb78b9400f1ec7cb73bbdbe3ea520767be9224f",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/4cb78b9400f1ec7cb73bbdbe3ea520767be9224f"
        },
        "date": 1706088123452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1757.6,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.632,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "HenryChaing",
            "username": "HenryChaing"
          },
          "committer": {
            "name": "HenryChaing",
            "username": "HenryChaing"
          },
          "id": "177d885090302bf79c1f2364bf63122a596c00f8",
          "message": "Add specialized instruction to rv32emu",
          "timestamp": "2024-01-03T08:20:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/334/commits/177d885090302bf79c1f2364bf63122a596c00f8"
        },
        "date": 1706173902635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1627.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1483.374,
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
          "id": "ecd2ef688bd29603554e7572de9e63fc73ba5172",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/ecd2ef688bd29603554e7572de9e63fc73ba5172"
        },
        "date": 1706175033748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1767.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1504.632,
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
          "id": "5bf9063bf5cd20dbb120874c714afabc0c5f188c",
          "message": "Correct wrong opcode of conditional jump",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/335/commits/5bf9063bf5cd20dbb120874c714afabc0c5f188c"
        },
        "date": 1706333993455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1770.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.866,
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
          "id": "61a915291a6d54363b92ff707ab61c50a1731e6e",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/61a915291a6d54363b92ff707ab61c50a1731e6e"
        },
        "date": 1706351257819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1707.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.787,
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
          "id": "ee8ac9349879a4c40b156eb8b4138aba0306ed8b",
          "message": "Add profiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/333/commits/ee8ac9349879a4c40b156eb8b4138aba0306ed8b"
        },
        "date": 1706351350483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1768.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1500.869,
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
          "id": "de3b92be55a69cb8c8f5b35cb1a8640d120c335f",
          "message": "Fix csrrc instruction behavior when rs1 is 0",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/338/commits/de3b92be55a69cb8c8f5b35cb1a8640d120c335f"
        },
        "date": 1706457845113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1769.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.812,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "HenryChaing",
            "username": "HenryChaing"
          },
          "committer": {
            "name": "HenryChaing",
            "username": "HenryChaing"
          },
          "id": "62e3628476a57bea304375fad16367e927caf3ea",
          "message": "Add specialized instruction to rv32emu (2)",
          "timestamp": "2024-01-03T08:20:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/339/commits/62e3628476a57bea304375fad16367e927caf3ea"
        },
        "date": 1706523491399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1608.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1504.607,
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
          "id": "12c66bed2aa3b31356f3f8d2546203978ef229ea",
          "message": "Refine riscv.[ch] public API",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/12c66bed2aa3b31356f3f8d2546203978ef229ea"
        },
        "date": 1706726995797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1749.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.164,
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
          "id": "085b562e688b70ef30682be2f1a846f785e1c3d2",
          "message": "Refine riscv.[ch] public API",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/085b562e688b70ef30682be2f1a846f785e1c3d2"
        },
        "date": 1706730168326,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1717.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.58,
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
          "id": "19dd832d3e74f563213e29000474f9363d8e1f69",
          "message": "Refine riscv.[ch] public API",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/19dd832d3e74f563213e29000474f9363d8e1f69"
        },
        "date": 1706730480113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1616.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.814,
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
          "id": "fde9ce230f11b6a7ca2586be434ee5f2a142d9e2",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/fde9ce230f11b6a7ca2586be434ee5f2a142d9e2"
        },
        "date": 1706767662366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1652.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1507.51,
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
          "id": "b4b5227f5cb6ac56d39d9a3a94ebf88773b0995c",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/b4b5227f5cb6ac56d39d9a3a94ebf88773b0995c"
        },
        "date": 1706785414283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1749.8,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1488.118,
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
          "id": "f953ac1e051558623ae3d1bfd4cee70077e47c53",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/f953ac1e051558623ae3d1bfd4cee70077e47c53"
        },
        "date": 1706816492569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1599.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.073,
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
          "id": "3c5fe399cfdfa48f766a17f4007bcfe4ea6fcc24",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/3c5fe399cfdfa48f766a17f4007bcfe4ea6fcc24"
        },
        "date": 1706869686064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1621.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.411,
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
          "id": "fcfebe112cec6164f95bb407965a38364fe78d80",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/fcfebe112cec6164f95bb407965a38364fe78d80"
        },
        "date": 1706869957766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1749.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1527.756,
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
          "id": "30228959f71687248a8ad6923c2d72f220cf4514",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/30228959f71687248a8ad6923c2d72f220cf4514"
        },
        "date": 1706870046552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1759,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1521.03,
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
          "id": "8e7389500690cfda0db68330ccf1d8758df06525",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/8e7389500690cfda0db68330ccf1d8758df06525"
        },
        "date": 1706870289005,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1623,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.683,
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
          "id": "2cb0104cd70443b8b231d023ceb9f9b31ef7cae1",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/2cb0104cd70443b8b231d023ceb9f9b31ef7cae1"
        },
        "date": 1706873016576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1619.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.468,
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
          "id": "ea51b2d1300c3d2379c4274af1faa74423fece89",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/ea51b2d1300c3d2379c4274af1faa74423fece89"
        },
        "date": 1706885463188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1771.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1511.072,
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
          "id": "60aebceb01f4a507bb30c4ec34536b2822ed95c2",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/60aebceb01f4a507bb30c4ec34536b2822ed95c2"
        },
        "date": 1706889993874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1702.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1508.833,
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
          "id": "820cd9b290d96c1e34f966126e1cf4190fc901a5",
          "message": "Refine the API in the public header",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/340/commits/820cd9b290d96c1e34f966126e1cf4190fc901a5"
        },
        "date": 1706924244237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1709.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1504.619,
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
          "id": "f13ea49a915e55bbba64821dcecafb3fce9eba93",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/f13ea49a915e55bbba64821dcecafb3fce9eba93"
        },
        "date": 1707039857773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1613.77,
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
          "id": "c8da8acf590018509d48157fb446ab789ec2f840",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/c8da8acf590018509d48157fb446ab789ec2f840"
        },
        "date": 1707039898147,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1755.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.081,
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
          "id": "5619dc8368603da183e09c55537f38f204b0e690",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/5619dc8368603da183e09c55537f38f204b0e690"
        },
        "date": 1707048296458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1737.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1486.026,
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
          "id": "9b56e8df7ded8e9a3d08b87e15e2fad4e360aa1e",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/9b56e8df7ded8e9a3d08b87e15e2fad4e360aa1e"
        },
        "date": 1707048777967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1584.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1464.476,
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
          "id": "f5851a3747ec42944adefa9fa637299a908c0a06",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/f5851a3747ec42944adefa9fa637299a908c0a06"
        },
        "date": 1707051361789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1688.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.948,
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
          "id": "9582ec5889abb07ea954c3c13c184f166cf58490",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/9582ec5889abb07ea954c3c13c184f166cf58490"
        },
        "date": 1707053603663,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1623.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1464.677,
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
          "id": "3498b405356e39f3ae27cdf1bb6d7f253f480b36",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/3498b405356e39f3ae27cdf1bb6d7f253f480b36"
        },
        "date": 1707055008694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1755,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.143,
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
          "id": "079da386c39dbbf7a942f7023eab53b12acd3ebd",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/079da386c39dbbf7a942f7023eab53b12acd3ebd"
        },
        "date": 1707055789893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1742,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.699,
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
          "id": "b92150e4f14102dc7c43e64dac3bbc15ab77a9eb",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/b92150e4f14102dc7c43e64dac3bbc15ab77a9eb"
        },
        "date": 1707056529331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1604,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1470.934,
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
          "id": "b831e33e506b5095506548c974c0420d7038a2cc",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/b831e33e506b5095506548c974c0420d7038a2cc"
        },
        "date": 1707111538263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1754,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.261,
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
          "id": "94256128eecbb3d847638e237256e8d9c5d8aa7f",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/94256128eecbb3d847638e237256e8d9c5d8aa7f"
        },
        "date": 1707111616040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1760.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.657,
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
          "id": "f9b9e0dfc31881ac171f4e645b57acd53da0c8d5",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/f9b9e0dfc31881ac171f4e645b57acd53da0c8d5"
        },
        "date": 1707111691208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1598,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1488.898,
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
          "id": "59d77736764b85f67b5e0d1fc29b06aff5bd67c1",
          "message": "Fix bugs caught by infer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/59d77736764b85f67b5e0d1fc29b06aff5bd67c1"
        },
        "date": 1707142695160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1620,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.806,
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
          "id": "7caf570d97a1db48ce080229031deff7018dd491",
          "message": "Misc. bug and typo fixes",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/7caf570d97a1db48ce080229031deff7018dd491"
        },
        "date": 1707143523825,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1708.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.897,
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
          "id": "b328b131aa4934888dd2934c1e99848e52c2eee7",
          "message": "Misc. bug and typo fixes",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/b328b131aa4934888dd2934c1e99848e52c2eee7"
        },
        "date": 1707143582769,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1756.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.312,
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
          "id": "7343e7e7f40dffe1702b9e228ce9896e651566bf",
          "message": "Misc. bug and typo fixes",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/7343e7e7f40dffe1702b9e228ce9896e651566bf"
        },
        "date": 1707152173024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1637.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1487.254,
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
          "id": "cdb03cdfa1c2864a20bf7a33763ae48011c416e4",
          "message": "Misc. bug and typo fixes",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/327/commits/cdb03cdfa1c2864a20bf7a33763ae48011c416e4"
        },
        "date": 1707152238289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1619.2,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.654,
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
          "id": "77e5936c7dcbe3582dae50ef2c03a1e2dfcd5d11",
          "message": "Fix a bug where a file descriptor isn't closed after allocation",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/344/commits/77e5936c7dcbe3582dae50ef2c03a1e2dfcd5d11"
        },
        "date": 1707158468958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1765.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.069,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "henrybear327@users.noreply.github.com",
            "name": "Chun-Hung Tseng",
            "username": "henrybear327"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bc47a4f2fc3b3d777853cd1dcd794213879dd02",
          "message": "Add missing fclose (#344)\n\nCo-authored-by: Chun-Hung Tseng <chun-hung.tseng@swisscom.com>",
          "timestamp": "2024-02-06T03:13:40+08:00",
          "tree_id": "933ce5a8ce60525d416617198858a90b3de6616d",
          "url": "https://github.com/sysprog21/rv32emu/commit/7bc47a4f2fc3b3d777853cd1dcd794213879dd02"
        },
        "date": 1707160712939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1595.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1507.773,
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
          "id": "43e86d68071ad9963b64c29642ee5c0f1da14781",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/43e86d68071ad9963b64c29642ee5c0f1da14781"
        },
        "date": 1707189046031,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1761,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1524.899,
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
          "id": "ef33a3c0243b2f7dff9963b2195d7caa49a8dda5",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/ef33a3c0243b2f7dff9963b2195d7caa49a8dda5"
        },
        "date": 1707199750188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1767.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1522.661,
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
          "id": "eb453e9c86380fded776db76234767eadb1963ec",
          "message": "Eliminate unintended symbol exposure",
          "timestamp": "2024-02-06T14:47:52+08:00",
          "tree_id": "6eb475732b4b1609930ab88e0928489be60e3ac0",
          "url": "https://github.com/sysprog21/rv32emu/commit/eb453e9c86380fded776db76234767eadb1963ec"
        },
        "date": 1707202382474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1583.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.11,
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
          "id": "50b8a07cdb302820a73d30f1e4116d68f2017ced",
          "message": "Proofread demo descriptions",
          "timestamp": "2024-02-07T06:53:44+08:00",
          "tree_id": "fa4f338e5ba97558abd08b81cded87d08e2ed7a5",
          "url": "https://github.com/sysprog21/rv32emu/commit/50b8a07cdb302820a73d30f1e4116d68f2017ced"
        },
        "date": 1707260326169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1599,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.684,
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
          "id": "52fe009fcb7f1635aad16888720d998d87b7d2f4",
          "message": "Fix illegal instruction handling for SLLI, SRLI, and SRAI",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/348/commits/52fe009fcb7f1635aad16888720d998d87b7d2f4"
        },
        "date": 1707315817025,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1662.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1527.967,
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
          "id": "5e6ea159e01c050f10c175f9b219f6bae376247a",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/5e6ea159e01c050f10c175f9b219f6bae376247a"
        },
        "date": 1707715373434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1714.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1519.818,
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
          "id": "df43757d94f9cf32303644f43a8939f61c6526c8",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/df43757d94f9cf32303644f43a8939f61c6526c8"
        },
        "date": 1707797979642,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1746.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1516.62,
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
          "id": "49ab1ace75aeb1d0dd6940cc91c29fd6db4a02dc",
          "message": "Introducing register allocation for the tier-1 JIT compiler",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/341/commits/49ab1ace75aeb1d0dd6940cc91c29fd6db4a02dc"
        },
        "date": 1707798152034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1745.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1531.116,
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
          "id": "3c3d4405145cc990dc5788ffc6514e46b7402719",
          "message": "Introducing local register allocation for the tier-1 JIT compiler (#341)\n\nLocal register allocation (RA) effectively reuses the host register\r\nvalue within a basic block scope, thereby reducing the number of load\r\nand store instructions.\r\n\r\nTake continuous addi instructions as an example:\r\n  addi t0, t0, 1\r\n  addi t0, t0, 1\r\n  addi t0, t0, 1\r\n\r\nThe generated machine code without register allocation\r\n  load t0, t0_addr\r\n  add t0, 1\r\n  sw t0, t0_addr\r\n  load t0, t0_addr\r\n  add t0, 1\r\n  sw t0, t0_addr\r\n  load t0, t0_addr\r\n  add t0, 1\r\n  sw t0, t0_addr\r\n\r\nThe generated machine code without register allocation\r\n  load t0, t0_addr\r\n  add t0, 1\r\n  add t0, 1\r\n  add t0, 1\r\n  sw t0, t0_addr\r\n\r\nAs shown in the above example, register allocation reuses the host\r\nregister and reduces the number of load and store instructions.\r\n\r\n* x86-64(i7-11700)\r\n| Metric    |  w/o RA  |  w/ RA   | SpeedUp |\r\n|-----------+----------+----------+---------|\r\n| dhrystone |  0.342 s |  0.328 s |  +4.27% |                                                                                                                 \r\n| miniz     |  1.243 s |  1.185 s |  +4.89% |\r\n| primes    |  1.716 s |  1.689 s |  +1.60% |\r\n| sha512    |  2.063 s |  1.880 s |  +9.73% |\r\n| stream    | 11.619 s | 11.419 s |  +1.75% |\r\n\r\n* Aarch64 (eMag)\r\n| Metric    |  w/o RA  |  w/ RA   | SpeedUp |\r\n|-----------+----------+----------+---------|\r\n| dhrystone |  1.935 s |  1.301 s | +48.73% |\r\n| miniz     |  7.706 s |  4.362 s | +76.66% |\r\n| primes    | 10.513 s |  9.633 s |  +9.14% |\r\n| sha512    |  6.508 s |  6.119 s |  +6.36% |\r\n| stream    | 45.174 s | 38.037 s | +18.76% |\r\n\r\nAs demonstrated in the performance analysis, the register allocation\r\nimproves the overall performance for the T1C generated machine code.\r\nWithout RA, the generated machine need to store back the register\r\nvalue in the end of intruction. With RA, we only need to store back the\r\nregister value in the end of basic block or when host registers are\r\nfully occupied. The performance enhancement is particularly pronounced\r\non Aarch64 due to its increased availability of registers, providing a\r\nmore extensive mapping capability for VM registers.",
          "timestamp": "2024-02-13T19:55:47+08:00",
          "tree_id": "f4bc32f0bddedef8ca1abac7cee8afded20688e0",
          "url": "https://github.com/sysprog21/rv32emu/commit/3c3d4405145cc990dc5788ffc6514e46b7402719"
        },
        "date": 1707825639877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1592.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1500.619,
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
          "id": "f15e4c4f55421b012d93ad98ba00e047a997f7ab",
          "message": "Fix signed integer comparison in AMOMIN.W and AMOMAX.W",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/352/commits/f15e4c4f55421b012d93ad98ba00e047a997f7ab"
        },
        "date": 1708399828181,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1585.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1525.848,
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
          "id": "ef29d7dbb81bda1ee3b0cfb04272bd1d29884292",
          "message": "Improve the performance of indirect jump for T1C",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/355/commits/ef29d7dbb81bda1ee3b0cfb04272bd1d29884292"
        },
        "date": 1708681336984,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1770.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1520.527,
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
          "id": "3706645068f800e679d6ca66edbb9aa8b8d4b06f",
          "message": "Improve the performance of indirect jump for T1C",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/355/commits/3706645068f800e679d6ca66edbb9aa8b8d4b06f"
        },
        "date": 1708766723661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1676.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.122,
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
          "id": "5464b7909f74cb3dd73c661de0802f76c1a397c1",
          "message": "Improve the performance of indirect jump for T1C",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/355/commits/5464b7909f74cb3dd73c661de0802f76c1a397c1"
        },
        "date": 1708767050277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1565.2,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1507.036,
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
          "id": "8c2a7536483983d292f7d67a904cacc2da33ada2",
          "message": "Improve the performance of indirect jump for T1C",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/355/commits/8c2a7536483983d292f7d67a904cacc2da33ada2"
        },
        "date": 1708791202167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1747.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1518.137,
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
          "id": "654029f0aefca17befeaa5843a59599b49a91934",
          "message": "Binding IO handlers during RISC-V initialization",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/356/commits/654029f0aefca17befeaa5843a59599b49a91934"
        },
        "date": 1708835700014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1584.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.659,
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
          "id": "541008ba31468a23b8b3d8df5b1313ead8c8e1e9",
          "message": "Bind IO handlers during emulator initialization",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/357/commits/541008ba31468a23b8b3d8df5b1313ead8c8e1e9"
        },
        "date": 1708841081315,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1777.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1517.492,
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
          "id": "fdd3ec1dacacec10b2eb9c7716c943a791d5349c",
          "message": "Bind IO handlers during emulator initialization",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/357/commits/fdd3ec1dacacec10b2eb9c7716c943a791d5349c"
        },
        "date": 1708842180679,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1581.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.433,
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
          "id": "835577721493137275da611dc5edb1ea71897035",
          "message": "Bind I/O handlers during emulator initialization",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/357/commits/835577721493137275da611dc5edb1ea71897035"
        },
        "date": 1708842247945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1764.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1522.345,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alanjian85",
            "username": "alanjian85"
          },
          "committer": {
            "name": "alanjian85",
            "username": "alanjian85"
          },
          "id": "d6871d9d231f6988b6add4902cb6899362708a3d",
          "message": "Use the canonical order of RISC-V extension names",
          "timestamp": "2022-08-02T09:42:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/363/commits/d6871d9d231f6988b6add4902cb6899362708a3d"
        },
        "date": 1708951876055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1649.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.809,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alanjian85@outlook.com",
            "name": "Alan Jian",
            "username": "alanjian85"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d511c1e2b07a9deb145971be40e2a7c779068152",
          "message": "Use the canonical order of RISC-V extension names (#363)\n\nThe RISC-V Instruction Set Manual Vol. 1 specifies the canonical order in which\r\nISA extension names should appear in architecture name strings in Table 1.1 of\r\nChapter 27. However, the repository description and the code state that rv32emu\r\nsupports RV32IMACF, whereas the correct string in canonical order should be\r\nRV32IMAFC.  This string may cause problems when used in some tools that need\r\nthe canonical order of extensions, such as the -march option of GCC.\r\n\r\nClose #359",
          "timestamp": "2024-02-27T00:10:14+08:00",
          "tree_id": "c2f53588068bee9d6de59532d3da8814d3abb1b4",
          "url": "https://github.com/sysprog21/rv32emu/commit/d511c1e2b07a9deb145971be40e2a7c779068152"
        },
        "date": 1708964107466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1579.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.187,
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
          "id": "2718a2678044e6baf5f0d62f0e75498707a66592",
          "message": "Fix RV32A error",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/367/commits/2718a2678044e6baf5f0d62f0e75498707a66592"
        },
        "date": 1709134604321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1759.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1517.908,
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
          "id": "acb06dc07a5872ecb04507584cafd9203e773d2a",
          "message": "Apply editorial changes",
          "timestamp": "2024-03-03T00:07:20+08:00",
          "tree_id": "609986fbf7f67d4327d8cb54bb50074facfd0ba4",
          "url": "https://github.com/sysprog21/rv32emu/commit/acb06dc07a5872ecb04507584cafd9203e773d2a"
        },
        "date": 1709395946868,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1596,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1486.308,
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
          "id": "dfdadc851628af3a25ceff84efd526f90f961a7e",
          "message": "Make clang-format happy\n\nMacro IIF sometime confuses clang-format, so that we have to insert\nsemicolon manually.",
          "timestamp": "2024-03-03T00:57:17+08:00",
          "tree_id": "b22ca1b5664f004ad29feba2794824cb137f85e9",
          "url": "https://github.com/sysprog21/rv32emu/commit/dfdadc851628af3a25ceff84efd526f90f961a7e"
        },
        "date": 1709399013332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1572,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1500.847,
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
          "id": "c5625e885cf5261edf52c40e62d154e539ab0abb",
          "message": "End the indirect jump when potential hotspot is detected",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/371/commits/c5625e885cf5261edf52c40e62d154e539ab0abb"
        },
        "date": 1709526005795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1638.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1505.072,
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
          "id": "bbef5facda979a73541cf05c3e2014747f6b98b7",
          "message": "End the indirect jump when potential hotspot is detected",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/371/commits/bbef5facda979a73541cf05c3e2014747f6b98b7"
        },
        "date": 1709530040924,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1749,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1519.296,
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
          "id": "25ed347f1e6f10d250441eb29d747cb09a395ad6",
          "message": "End the indirect jump when potential hotspot is detected",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/371/commits/25ed347f1e6f10d250441eb29d747cb09a395ad6"
        },
        "date": 1709544381122,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1746.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1512.251,
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
          "id": "f12be9c0c3e09e46d669b7dafb89366505f3429b",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/f12be9c0c3e09e46d669b7dafb89366505f3429b"
        },
        "date": 1709597783369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1581.2,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.347,
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
          "id": "d21b6fccc2dad248dc9c5863ce409c57d07bde89",
          "message": "End the indirect jump when potential hotspot is detected",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/371/commits/d21b6fccc2dad248dc9c5863ce409c57d07bde89"
        },
        "date": 1709732192948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1773.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1478.111,
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
          "id": "7304efaf73d2bd2e9568064e108b4d4d68a43382",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/7304efaf73d2bd2e9568064e108b4d4d68a43382"
        },
        "date": 1709754525468,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1663.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1468.111,
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
          "id": "873e211e1caa416bb5deb2ad0f8ba61d7798d899",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/873e211e1caa416bb5deb2ad0f8ba61d7798d899"
        },
        "date": 1709754559013,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1778,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1475.282,
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
          "id": "0d4d69c6e5925926dbc5e85d4b48c848bfef477c",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/0d4d69c6e5925926dbc5e85d4b48c848bfef477c"
        },
        "date": 1709754656325,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1769.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1486.69,
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
          "id": "10a89878861c8ab2c662753e66852591c3d198cf",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/10a89878861c8ab2c662753e66852591c3d198cf"
        },
        "date": 1709755149642,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1644.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1469.421,
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
          "id": "dce19583c17139685e63338ec7b45eac81e13798",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/dce19583c17139685e63338ec7b45eac81e13798"
        },
        "date": 1709755751294,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1777,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1469.138,
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
          "id": "4f70b5dc0177f90d1dcd1b7a4b6b2995776f0caa",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/4f70b5dc0177f90d1dcd1b7a4b6b2995776f0caa"
        },
        "date": 1709755876406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1775.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1471.539,
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
          "id": "6ecc87dcba9bbbd74a2ddda7611a5aef0edb2484",
          "message": "End the indirect jump when potential hotspot is detected",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/371/commits/6ecc87dcba9bbbd74a2ddda7611a5aef0edb2484"
        },
        "date": 1709799074902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1776.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1470.904,
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
          "id": "d58db3e24451b8418ec421a4a32cf07393bd6539",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/d58db3e24451b8418ec421a4a32cf07393bd6539"
        },
        "date": 1709799710942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1687.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1478.909,
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
          "id": "f0dbb342d9f1c8964f0e03ebf1e89fd999f1fea4",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/f0dbb342d9f1c8964f0e03ebf1e89fd999f1fea4"
        },
        "date": 1709799820691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1606.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1450.992,
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
          "id": "54db76fc89250dc1a494a8b3d265b270f01d1a2c",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/54db76fc89250dc1a494a8b3d265b270f01d1a2c"
        },
        "date": 1709818856036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1774.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1462.07,
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
          "id": "ff8c8d99ed99a55b2bde4d8d5a2b661c9f7f2b97",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/ff8c8d99ed99a55b2bde4d8d5a2b661c9f7f2b97"
        },
        "date": 1709818988233,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1621.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1472.876,
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
          "id": "fc63483e45488626b08ba00c2bb64c9952e71556",
          "message": "CI: Add Clang static analyzer",
          "timestamp": "2023-11-11T09:23:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/361/commits/fc63483e45488626b08ba00c2bb64c9952e71556"
        },
        "date": 1709819226088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1632.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1469.53,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "henrybear327@users.noreply.github.com",
            "name": "Chun-Hung Tseng",
            "username": "henrybear327"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae73316a105b51cbcebd1fb7fa8c8efe965279e3",
          "message": "CI: Add Clang static analyzer (#361)\n\nThe clang static analyzer is invoked by executing scan-build. \r\n\r\nIf any issues are detected by scan-build, it will halt the pipeline. \r\nIf halting the pipeline is not the desired behavior, remove the flag \r\n--status-bugs .\r\n\r\nThe analysis result can be viewed in the GitHub Action execution log.\r\n\r\nUbuntu-latest is used to enable us to utilize the latest version of the \r\ntool.\r\n\r\nReferences:\r\n- https://gitlab.xfce.org/xfce/xfce4-dev-tools/-/issues/51\r\n- https://gitlab.com/gnuwget/wget2/-/blob/cabedf3847afd3926cbeaa67d4ee9f28f78979d9/.gitlab-ci.yml#L279",
          "timestamp": "2024-03-08T09:03:41+08:00",
          "tree_id": "1d7dc859a8d08c7baefa71971fe24d4e2616fc36",
          "url": "https://github.com/sysprog21/rv32emu/commit/ae73316a105b51cbcebd1fb7fa8c8efe965279e3"
        },
        "date": 1709860110296,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1783.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1479.865,
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
          "id": "ffd0e0b23e608527953ec97140eaf9fe4fd9bbcb",
          "message": "Fix several critical RV32A instruction implementations",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/373/commits/ffd0e0b23e608527953ec97140eaf9fe4fd9bbcb"
        },
        "date": 1709909209246,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1645.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1465.64,
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
          "id": "a2a254e8447bf9d787439d10a65be7b58c4b5760",
          "message": "Refine rv_step function prototype",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/380/commits/a2a254e8447bf9d787439d10a65be7b58c4b5760"
        },
        "date": 1710235528884,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1604.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1469.985,
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
          "id": "fa38c9e6e65a539fc3b45140312f3671879325dd",
          "message": "Enable run video games using WebAssembly",
          "timestamp": "2023-12-16T07:24:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/385/commits/fa38c9e6e65a539fc3b45140312f3671879325dd"
        },
        "date": 1710576226601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1640.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.237,
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
          "id": "b97c73cfca91fb33550b4f520658dbe0b64e2578",
          "message": "Enable run video games using WebAssembly",
          "timestamp": "2024-03-21T03:08:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/385/commits/b97c73cfca91fb33550b4f520658dbe0b64e2578"
        },
        "date": 1711385579400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1756.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.261,
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
          "id": "bef66b8665cc205c06959554f7edf732bcea4019",
          "message": "Enable run video games using WebAssembly",
          "timestamp": "2024-03-21T03:08:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/385/commits/bef66b8665cc205c06959554f7edf732bcea4019"
        },
        "date": 1711385651036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1590.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1458.497,
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
          "id": "07b86f60aa9f811691cdf54e9fcb3ddef7bfc04d",
          "message": "Enable run video games using WebAssembly",
          "timestamp": "2024-03-21T03:08:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/385/commits/07b86f60aa9f811691cdf54e9fcb3ddef7bfc04d"
        },
        "date": 1711386623190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1613.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1459.784,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "856f082efa85841f3b68e6304707490f072c28ff",
          "message": "Fix missing dirty flag in `cmv` instruction",
          "timestamp": "2024-02-27T19:54:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/395/commits/856f082efa85841f3b68e6304707490f072c28ff"
        },
        "date": 1711700885539,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1758.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1497.349,
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
          "id": "37af15536ed3c1aa493617b590a71afffe4cf8ef",
          "message": "Fix ELF typo in html and output process completion indicator",
          "timestamp": "2024-03-21T03:08:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/398/commits/37af15536ed3c1aa493617b590a71afffe4cf8ef"
        },
        "date": 1712295824603,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1638.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.044,
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
          "id": "a50bc462fef50edf97446c06536d1aa47e72b7de",
          "message": "Fix ELF typo in html and output process completion indicator",
          "timestamp": "2024-03-21T03:08:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/404/commits/a50bc462fef50edf97446c06536d1aa47e72b7de"
        },
        "date": 1712332182022,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1766.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.927,
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
          "id": "079ac677441787caab22b2ab50ef35fedc81ecbc",
          "message": "Streamline rounding modes checks and settings in RV32F",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/410/commits/079ac677441787caab22b2ab50ef35fedc81ecbc"
        },
        "date": 1712553785945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1603.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1467.267,
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
          "id": "9408d8c661975555213ae80b169fd71fb5dea9be",
          "message": "Fix trailing whitespace",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/412/commits/9408d8c661975555213ae80b169fd71fb5dea9be"
        },
        "date": 1712554539542,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1605.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1465.346,
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
          "id": "374daebcdc7bf6050507396a36e201d33041d8ff",
          "message": "Streamline rounding modes checks and settings in RV32F",
          "timestamp": "2023-08-31T21:02:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/410/commits/374daebcdc7bf6050507396a36e201d33041d8ff"
        },
        "date": 1712566502973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1741.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.415,
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
          "id": "efd94a470670f21dca1cebaf23677ab38d308fea",
          "message": "Remove the backward jump from the T1C condition",
          "timestamp": "2022-12-07T09:30:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/414/commits/efd94a470670f21dca1cebaf23677ab38d308fea"
        },
        "date": 1713357995042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1759.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.311,
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
          "id": "0d258e6d7d8259d86366811ac4d4cc3293c405d3",
          "message": "Add code cache flush mechanism",
          "timestamp": "2024-04-22T04:39:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/417/commits/0d258e6d7d8259d86366811ac4d4cc3293c405d3"
        },
        "date": 1713787836970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1744.6,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.516,
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
          "id": "143a903047472cf85cdf94b40355bef18efacfc7",
          "message": "Add code cache flush mechanism",
          "timestamp": "2024-04-22T04:39:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/417/commits/143a903047472cf85cdf94b40355bef18efacfc7"
        },
        "date": 1713790923475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1750.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.731,
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
          "id": "e7e7ef72136cfd2b83177f4a4af481af65d5bd3b",
          "message": "Integrate LLVM JIT compiler as T2C",
          "timestamp": "2024-05-01T06:20:12Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/419/commits/e7e7ef72136cfd2b83177f4a4af481af65d5bd3b"
        },
        "date": 1714546840029,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1745.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.801,
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
          "id": "46de17b5b26ca1a4de015802cd7721b51fb6a3ff",
          "message": "Draft",
          "timestamp": "2024-05-01T06:20:12Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/46de17b5b26ca1a4de015802cd7721b51fb6a3ff"
        },
        "date": 1714841611023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1758.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1496.771,
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
          "id": "6edfbdb560563bb4661f28918f006c4c64e0ac30",
          "message": "Draft",
          "timestamp": "2024-05-01T06:20:12Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/6edfbdb560563bb4661f28918f006c4c64e0ac30"
        },
        "date": 1714841887128,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1652.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1508.17,
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
          "id": "46de17b5b26ca1a4de015802cd7721b51fb6a3ff",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/46de17b5b26ca1a4de015802cd7721b51fb6a3ff"
        },
        "date": 1714891560508,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1586.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1470.578,
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
          "id": "a9c0e8ad7dbb3445a29e51bccb11af5e1ccb5708",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/a9c0e8ad7dbb3445a29e51bccb11af5e1ccb5708"
        },
        "date": 1714891626895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1593.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.162,
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
          "id": "3292a7a278d455bb8b64527bcb00d1143a61a966",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/3292a7a278d455bb8b64527bcb00d1143a61a966"
        },
        "date": 1714891746060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1750.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1501.56,
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
          "id": "d7058a22f993a2132e43fe5d6e42516c76183c41",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/d7058a22f993a2132e43fe5d6e42516c76183c41"
        },
        "date": 1714892025806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1763,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.738,
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
          "id": "d7058a22f993a2132e43fe5d6e42516c76183c41",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/d7058a22f993a2132e43fe5d6e42516c76183c41"
        },
        "date": 1714892029620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1627.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1508.675,
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
          "id": "a9065d8584ccb7d78583d8f04352c5fcec7c0ad9",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/a9065d8584ccb7d78583d8f04352c5fcec7c0ad9"
        },
        "date": 1714896158433,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1753.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.282,
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
          "id": "13ad100a457a156cd0d925971338fdc6e54f545f",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/13ad100a457a156cd0d925971338fdc6e54f545f"
        },
        "date": 1714896578332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1744.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.307,
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
          "id": "ce0d6bb7c07c240c372f64afb233bc38a87324bf",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/ce0d6bb7c07c240c372f64afb233bc38a87324bf"
        },
        "date": 1714905034160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1746,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.582,
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
          "id": "93e843a5a8c4a952c69fce57177ada0825ef9df9",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/93e843a5a8c4a952c69fce57177ada0825ef9df9"
        },
        "date": 1714905217140,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1762.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1498.848,
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
          "id": "68f2444812bc3d1e091287d6fa26063257cf61d2",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/68f2444812bc3d1e091287d6fa26063257cf61d2"
        },
        "date": 1714906454827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1721.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.506,
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
          "id": "22343c7c9d3f916619383698edacf5e3bb3a56ea",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/22343c7c9d3f916619383698edacf5e3bb3a56ea"
        },
        "date": 1714921710769,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1632.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.706,
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
          "id": "489887fabc669d7e8c6e740014acd9c13181da6d",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/489887fabc669d7e8c6e740014acd9c13181da6d"
        },
        "date": 1714922279375,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1623.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1486.736,
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
          "id": "2e9c61e4b09f34e805f5ced46870b51a6c58276b",
          "message": "Draft",
          "timestamp": "2024-05-05T06:39:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/2e9c61e4b09f34e805f5ced46870b51a6c58276b"
        },
        "date": 1714922809979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1634.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.009,
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
          "id": "c0b2de16d75bb4d05c302c2a815e12748b719f5c",
          "message": "Fix typo",
          "timestamp": "2024-05-06T20:04:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/427/commits/c0b2de16d75bb4d05c302c2a815e12748b719f5c"
        },
        "date": 1715026383609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1606.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1472.53,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe4030710d6df1116e92666e28c96352f2f0830c",
          "message": "Fix typo (#427)",
          "timestamp": "2024-05-07T04:21:29+08:00",
          "tree_id": "dffc839870c66136f5028c1932a65dfedfa7ce41",
          "url": "https://github.com/sysprog21/rv32emu/commit/fe4030710d6df1116e92666e28c96352f2f0830c"
        },
        "date": 1715027178326,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1746.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1511.811,
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
          "id": "96af57c7518e34de988eb8e57a7c8407c92d9c93",
          "message": "Consolidate AMO RVOP coding consistency",
          "timestamp": "2024-05-06T20:32:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/428/commits/96af57c7518e34de988eb8e57a7c8407c92d9c93"
        },
        "date": 1715029189186,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1760.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1506.573,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06ce6d2a95e7028e834ae1b41603bf587ff884af",
          "message": "Consolidate consistency of AMO RVOP (#428)\n\nThe 'addr' variable is used to specify the memory address in many I/O\r\noperations within the RVOP macro, such as the 'lh' and 'lw' instructions.\r\nHowever, most of the AMO (Atomic Memory Operation) instructions did not\r\nuse it. To maintain consistency, the use of the 'addr' variable has been\r\nconsolidated.",
          "timestamp": "2024-05-07T05:18:42+08:00",
          "tree_id": "b0e32b0429211f9548c4c5875965ed21d08dc9ae",
          "url": "https://github.com/sysprog21/rv32emu/commit/06ce6d2a95e7028e834ae1b41603bf587ff884af"
        },
        "date": 1715030621903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1606,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1471.53,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "committer": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "id": "4b1e65e573db61b203f747876dc4fff7f8777b51",
          "message": "Fix typo",
          "timestamp": "2024-05-07T08:25:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/429/commits/4b1e65e573db61b203f747876dc4fff7f8777b51"
        },
        "date": 1715070680771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1729.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.031,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "committer": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "id": "900571b39be4e399e6304686c20bac3760ce8036",
          "message": "Fix typo",
          "timestamp": "2024-05-07T09:57:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/430/commits/900571b39be4e399e6304686c20bac3760ce8036"
        },
        "date": 1715076230920,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1756.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1504.748,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "committer": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "id": "580e3230a41346db1090c0a6d250c1bdf8fcff6c",
          "message": "Fix typo",
          "timestamp": "2024-05-07T09:57:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/430/commits/580e3230a41346db1090c0a6d250c1bdf8fcff6c"
        },
        "date": 1715095198590,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1636,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1489.378,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "committer": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "id": "78fc6451a91f1dd4fcf6a3d310a97e7c72c76fe8",
          "message": "Fix typo",
          "timestamp": "2024-05-07T15:14:48Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/430/commits/78fc6451a91f1dd4fcf6a3d310a97e7c72c76fe8"
        },
        "date": 1715095452721,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1708.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1495.662,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "committer": {
            "name": "p96114175",
            "username": "p96114175"
          },
          "id": "d13520acc5410941e2ced174c7bb134d501df726",
          "message": "Fix typo",
          "timestamp": "2024-05-07T15:19:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/430/commits/d13520acc5410941e2ced174c7bb134d501df726"
        },
        "date": 1715148718447,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1734.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.12,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "102530486+p96114175@users.noreply.github.com",
            "name": "Huaxin",
            "username": "p96114175"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d2418b95ccd3ee7824690f8b49a7fd01952a08",
          "message": "Fix typo (#430)",
          "timestamp": "2024-05-08T15:09:22+08:00",
          "tree_id": "02386745969a65145e16b8ac3e6cfaf803e3e845",
          "url": "https://github.com/sysprog21/rv32emu/commit/a3d2418b95ccd3ee7824690f8b49a7fd01952a08"
        },
        "date": 1715152481833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1608,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1476.195,
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
          "id": "644124a1ddc38ff46291bd993bc52b6d96f5b49e",
          "message": "Raise illegal instruction exception for Zicsr",
          "timestamp": "2024-05-08T10:47:05Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/432/commits/644124a1ddc38ff46291bd993bc52b6d96f5b49e"
        },
        "date": 1715264277676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1754.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1503.058,
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
          "id": "d3ff48d31b2d579cf60ca225d7ef6581b2621f5d",
          "message": "Consolidate the block_translate fucntion",
          "timestamp": "2024-05-11T16:04:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/437/commits/d3ff48d31b2d579cf60ca225d7ef6581b2621f5d"
        },
        "date": 1715444085774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1754.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.295,
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
          "id": "b1de0d6b0c9b47345c10be287563c1b043764667",
          "message": "Support emulating memory management unit(MMU)",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b1de0d6b0c9b47345c10be287563c1b043764667"
        },
        "date": 1715532567577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1762.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.765,
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
          "id": "05cfc406786419951862dbd71a57950db4a5e667",
          "message": "Support emulating memory management unit(MMU)",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/05cfc406786419951862dbd71a57950db4a5e667"
        },
        "date": 1715533128613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1596.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1474.188,
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
          "id": "66c2b9d8b44304867c849c2f6ee7b0ad34275de0",
          "message": "Support emulating memory management unit(MMU)",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/66c2b9d8b44304867c849c2f6ee7b0ad34275de0"
        },
        "date": 1715533597384,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1755.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1502.888,
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
          "id": "fd2ab171ee17f0be9c6f505fb08a8b57f0435830",
          "message": "Implement minimal SBI v0.3",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/439/commits/fd2ab171ee17f0be9c6f505fb08a8b57f0435830"
        },
        "date": 1715574341588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1764.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1500.585,
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
          "id": "b0a539eecfa1086b7e7102d58feecc22a6640442",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-11T16:04:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/b0a539eecfa1086b7e7102d58feecc22a6640442"
        },
        "date": 1715579282981,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1618.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1497.781,
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
          "id": "25cab8ff910169ea63a7b6a4eaafdb42dd71964c",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/25cab8ff910169ea63a7b6a4eaafdb42dd71964c"
        },
        "date": 1715579565373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1625.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.428,
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
          "id": "db478c366aec1d4d84618bbdb88641c0b7dd39f0",
          "message": "Implement minimal SBI v0.3",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/439/commits/db478c366aec1d4d84618bbdb88641c0b7dd39f0"
        },
        "date": 1715587547660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1744.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.068,
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
          "id": "ad472d95b063306c6bde4dd9f92661acf7f99511",
          "message": "Implement minimal SBI v0.3",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/439/commits/ad472d95b063306c6bde4dd9f92661acf7f99511"
        },
        "date": 1715588584303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1624.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1493.719,
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
          "id": "487d14f57f947144eace29777fbabd8655cff50e",
          "message": "Implement minimal SBI v0.3",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/439/commits/487d14f57f947144eace29777fbabd8655cff50e"
        },
        "date": 1715588794659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1691,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1569.296,
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
          "id": "e9cecd11b0811b36af2a077743466d61235c7b6b",
          "message": "Implement minimal SBI v0.3",
          "timestamp": "2024-05-12T16:34:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/439/commits/e9cecd11b0811b36af2a077743466d61235c7b6b"
        },
        "date": 1715589865349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1742.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1499.792,
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
          "id": "63a95af8a87262f5bb0d337ba563d74588e77f0a",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/63a95af8a87262f5bb0d337ba563d74588e77f0a"
        },
        "date": 1715589933038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1754.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1504.291,
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
          "id": "1d75c254275075059e8bc54136c9a17438bdf3a6",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/1d75c254275075059e8bc54136c9a17438bdf3a6"
        },
        "date": 1715591013135,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1765.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1497.964,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d13e82671a8f962739a6bf9d26fc371431d1b64",
          "message": "Implement minimal SBI (#439)\n\nSBI acts as a communication layer between S-mode software and M-mode\r\nhardware. To boot the Linux kernel, some minimal SBI extensions (v0.3)\r\nhave to be implemented, and they are:\r\n1. Base extension (EID=0x10)\r\n2. Timer extension (EID=0x54494D45)\r\n\r\nThe SRST extension (EID=0x53525354) is optional, so only the shutdown\r\nreason has been implemented.",
          "timestamp": "2024-05-13T17:12:40+08:00",
          "tree_id": "650c3930d3fd74a1861fa36793b102d48eb9e304",
          "url": "https://github.com/sysprog21/rv32emu/commit/7d13e82671a8f962739a6bf9d26fc371431d1b64"
        },
        "date": 1715591868473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1745.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1492.807,
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
          "id": "384ce23a23cadac716d423f11ba1c2bdf9001681",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/384ce23a23cadac716d423f11ba1c2bdf9001681"
        },
        "date": 1715592102023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1747.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1492.714,
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
          "id": "60bd1f36d335da4dd3d5d752f82b05b634b73829",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/60bd1f36d335da4dd3d5d752f82b05b634b73829"
        },
        "date": 1715592859908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1745.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1488.85,
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
          "id": "0131837c45a4cd8b4d69198064bae7ba83840c54",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/0131837c45a4cd8b4d69198064bae7ba83840c54"
        },
        "date": 1715593275963,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1751.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1479.741,
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
          "id": "ec6cee0ac4facd41dbf91e59e23068c1c0c6d154",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/ec6cee0ac4facd41dbf91e59e23068c1c0c6d154"
        },
        "date": 1715594127011,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1616.3,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1491.765,
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
          "id": "60077ff547a22c8443102fd67f8b8d1d11d4ab2b",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T05:47:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/60077ff547a22c8443102fd67f8b8d1d11d4ab2b"
        },
        "date": 1715612172656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1751.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1492.805,
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
          "id": "58503e332ad74b3f61a878e5aa824f4ad24aed1a",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T14:56:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/58503e332ad74b3f61a878e5aa824f4ad24aed1a"
        },
        "date": 1715612744601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1608.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1457.984,
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
          "id": "5ac40a61c19f16e6404ea35f9724fb9a531111ce",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T14:56:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/5ac40a61c19f16e6404ea35f9724fb9a531111ce"
        },
        "date": 1715612783627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1750.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1494.056,
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
          "id": "8c368b330b34732266a92ad1cd49cdf1b8a92f19",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-05-13T15:56:49Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/8c368b330b34732266a92ad1cd49cdf1b8a92f19"
        },
        "date": 1715616173433,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1483,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1479.155,
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
          "id": "33e50685cdfc8847d512ef149102ed109e83349c",
          "message": "Specify can_branch for sret instruction",
          "timestamp": "2024-05-26T13:56:03Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/443/commits/33e50685cdfc8847d512ef149102ed109e83349c"
        },
        "date": 1716732481388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ce2a9ab169ff4feb4a08537c2dffe2ae31e3ec6c",
          "message": "Specify can_branch for sret instruction",
          "timestamp": "2024-05-26T13:56:03Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/443/commits/ce2a9ab169ff4feb4a08537c2dffe2ae31e3ec6c"
        },
        "date": 1716735758354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "037f5ade149f07ca79b6ea39fb3068fceb73f511",
          "message": "Specify can_branch and decode the sret instruction",
          "timestamp": "2024-05-26T13:56:03Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/443/commits/037f5ade149f07ca79b6ea39fb3068fceb73f511"
        },
        "date": 1716735885020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.57,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6f8864b4cdd38b595065adade10f7b3e36ceba99",
          "message": "Specify can_branch and decode the sret instruction",
          "timestamp": "2024-05-26T13:56:03Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/443/commits/6f8864b4cdd38b595065adade10f7b3e36ceba99"
        },
        "date": 1716774902925,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "3196518deb8405784b885207a793a1605ed0667e",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/3196518deb8405784b885207a793a1605ed0667e"
        },
        "date": 1717233653290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 11.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ba19e4ace00c2c792a93b95cb38c68f00b732c54",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/ba19e4ace00c2c792a93b95cb38c68f00b732c54"
        },
        "date": 1717233658999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "f42a6416a1609509fc9d514c295ff7872265d523",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/f42a6416a1609509fc9d514c295ff7872265d523"
        },
        "date": 1717235449180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 9.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "941e65c3249cd70ed35d0804a3ab093968c03500",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/941e65c3249cd70ed35d0804a3ab093968c03500"
        },
        "date": 1717235547817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "3ab5553c0d732f05d19cd747bc70d667e2f33c43",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/3ab5553c0d732f05d19cd747bc70d667e2f33c43"
        },
        "date": 1717308206406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "a77862f08250ee01e3005529f6d4b5677ce5194b",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/a77862f08250ee01e3005529f6d4b5677ce5194b"
        },
        "date": 1717398237895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "7f6ef02bb13f4d48c34755c52e0721a9ad936149",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-05-26T13:56:03Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/7f6ef02bb13f4d48c34755c52e0721a9ad936149"
        },
        "date": 1717406690654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 11.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ded6f042ef2a294d668e7d2dc54f808644a6278e",
          "message": "Remove libc subsituation",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/450/commits/ded6f042ef2a294d668e7d2dc54f808644a6278e"
        },
        "date": 1717430056104,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b8bb4b4edfd2037d91efe8c995721b28662b5b4a",
          "message": "Remove libc subsituation",
          "timestamp": "2024-06-01T07:30:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/450/commits/b8bb4b4edfd2037d91efe8c995721b28662b5b4a"
        },
        "date": 1717430106493,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0591347ab5f285598bb7c61352391c3aaa88dfcb",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-03T17:10:56Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/0591347ab5f285598bb7c61352391c3aaa88dfcb"
        },
        "date": 1717434727071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "83b80e7e2c10faa80af06a8a5684333c9b24ad73",
          "message": "Add sret case to insn_is_unconditional_branch",
          "timestamp": "2024-06-05T03:23:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/452/commits/83b80e7e2c10faa80af06a8a5684333c9b24ad73"
        },
        "date": 1717558733081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.8,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "64f9647c962f6a906bee6998f079a43a33434206",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-04T07:11:27Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/64f9647c962f6a906bee6998f079a43a33434206"
        },
        "date": 1717567786463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "a19e1e82f8b91e1c0a917b132450622055773456",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-05T06:10:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/a19e1e82f8b91e1c0a917b132450622055773456"
        },
        "date": 1717567900596,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ceffe39ed25c33c6efc5676afa8f92978498465f",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-05T06:10:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/ceffe39ed25c33c6efc5676afa8f92978498465f"
        },
        "date": 1717570556558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "efe643c00e661907c02e0de4aaba874d9f4b7cb3",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-05T06:10:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/efe643c00e661907c02e0de4aaba874d9f4b7cb3"
        },
        "date": 1717582817116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "398019463533e40f557e256c7d091109ec4dc7e2",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-05T06:10:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/398019463533e40f557e256c7d091109ec4dc7e2"
        },
        "date": 1717582903435,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "aa24f9d199dbd797db24f27b31438add2fbfe801",
          "message": "jit: Fix overflow handling in function muldivmod",
          "timestamp": "2024-06-05T06:10:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/454/commits/aa24f9d199dbd797db24f27b31438add2fbfe801"
        },
        "date": 1717776336192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "40ea0b541b46656b3bacef1cc8dbd508078292b4",
          "message": "jit: Fix overflow handling in function muldivmod (#454)\n\nThe behavior of the host instructions div and mod differs from that of\r\nRISC-V. Additional checks are required to align with RISC-V's DIV[U] and\r\nREM[U] behavior, particularly when handling division by zero and\r\noverflow scenarios.\r\n\r\nClose #297",
          "timestamp": "2024-06-10T22:11:38+08:00",
          "tree_id": "e824b2380e17e6edab220564a4a4f07b74fcf202",
          "url": "https://github.com/sysprog21/rv32emu/commit/40ea0b541b46656b3bacef1cc8dbd508078292b4"
        },
        "date": 1718028759445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 9.4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "4d4d7f467edd32119bb8ccc07ba3794789dcbca0",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-10T14:22:57Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/4d4d7f467edd32119bb8ccc07ba3794789dcbca0"
        },
        "date": 1718031172428,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6c13a845d4ef1f6cadd5d1592e8b029e1f5ec089",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-10T14:22:57Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/6c13a845d4ef1f6cadd5d1592e8b029e1f5ec089"
        },
        "date": 1718031271365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "5fb1609a6ee34dd89769887d10bd1ae6077a65ce",
          "message": "Implement tier-2 JIT compiler to accelerate ISS",
          "timestamp": "2024-06-10T14:22:57Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/425/commits/5fb1609a6ee34dd89769887d10bd1ae6077a65ce"
        },
        "date": 1718035537166,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "937193043b702bdcea9213271c6f449d1e620286",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/937193043b702bdcea9213271c6f449d1e620286"
        },
        "date": 1718256422312,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 8.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "17feab6ef1a22d3dc6727c49798eefc7aa9fcdf1",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/17feab6ef1a22d3dc6727c49798eefc7aa9fcdf1"
        },
        "date": 1718258095117,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "eb20baf5711305ea5d38b2fc26cdac587a7daa58",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/eb20baf5711305ea5d38b2fc26cdac587a7daa58"
        },
        "date": 1718258255680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "2f5e037b5f56f7baf26b6e8ddf002c45211599e7",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/2f5e037b5f56f7baf26b6e8ddf002c45211599e7"
        },
        "date": 1718258366629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "8b87096ff20fe2d58db5126345a5aaa8716c7bc3",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/8b87096ff20fe2d58db5126345a5aaa8716c7bc3"
        },
        "date": 1718258637685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "d03919d405b9338a0759e6f55b1e1c08ef980be9",
          "message": "Introduce background compilation",
          "timestamp": "2024-06-13T04:43:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/d03919d405b9338a0759e6f55b1e1c08ef980be9"
        },
        "date": 1718258907009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ee43b548eb3bc91a707e47820a6584dff1f53a01",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-05T03:23:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/ee43b548eb3bc91a707e47820a6584dff1f53a01"
        },
        "date": 1718472984654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 13.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "2ff8bf93c7b2732730c023cb4adaaf37d02d8810",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-05T03:23:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/2ff8bf93c7b2732730c023cb4adaaf37d02d8810"
        },
        "date": 1718473838558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "f2c8e486d53d1f2371ca2299ec92c2b3e26c3593",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-05T03:23:54Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/f2c8e486d53d1f2371ca2299ec92c2b3e26c3593"
        },
        "date": 1718474349752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "809c15189cef79cd2a6b9ffb41e695db05acccc4",
          "message": "Preliminary support \"Svinval\" Standard Extension",
          "timestamp": "2024-06-16T03:09:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/458/commits/809c15189cef79cd2a6b9ffb41e695db05acccc4"
        },
        "date": 1718561394130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yikming2222@gmail.com",
            "name": "ChinYikMing",
            "username": "ChinYikMing"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23e0f16d0c19f826c537624ed10404583080432",
          "message": "Add supervisor memory fence instruction SFENCE.VMA (#458)\n\nThe supervisor memory-management fence instruction SFENCE.VMA is used\r\nto synchronize updates to in-memory memory-management data structures\r\nwith current execution. Linux kernel leverage this instruction for\r\nsynchronization, support emulating this instruction is needed to boot\r\nLinux kernel. Since we have only one hart and we have not yet support\r\ncache (TLB) at present, the implementation of this instruction is\r\nstraight forward and it could be further improved in the future.\r\n\r\nRelated: #310, #438",
          "timestamp": "2024-06-17T03:24:12+08:00",
          "tree_id": "7cdb908ba59359568b7dfa7149335226906a2560",
          "url": "https://github.com/sysprog21/rv32emu/commit/d23e0f16d0c19f826c537624ed10404583080432"
        },
        "date": 1718565919854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "91caed6ebe628638505245e0de7833d9c4e0b6ed",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-06-12T09:43:21Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/91caed6ebe628638505245e0de7833d9c4e0b6ed"
        },
        "date": 1718568716385,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "d7e7a4b97d76a0a544f2b6d8c42daa65fe979664",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-06-12T09:43:21Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/d7e7a4b97d76a0a544f2b6d8c42daa65fe979664"
        },
        "date": 1718569011805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b844bcb8a0e51ae74a4fb1bf6fdffb6798a32d86",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/b844bcb8a0e51ae74a4fb1bf6fdffb6798a32d86"
        },
        "date": 1718571567288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b9e940b452a4c7dabd52f159c7fe35275b0e9fe9",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/b9e940b452a4c7dabd52f159c7fe35275b0e9fe9"
        },
        "date": 1718571703346,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "053e3f67cafab926fc145a5f4c8b6cc6d6a289c2",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/053e3f67cafab926fc145a5f4c8b6cc6d6a289c2"
        },
        "date": 1718571969318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 10.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "bd66eea2d6ba267579816af39341c7cd276e271e",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/bd66eea2d6ba267579816af39341c7cd276e271e"
        },
        "date": 1718572018751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 17,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "cc9f24bea38088f24e6616d4fe70f4752adfa6e8",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/cc9f24bea38088f24e6616d4fe70f4752adfa6e8"
        },
        "date": 1718572081155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "eaf18a9bd3bd0ee936c97578a7a2ca8b806ceb38",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/eaf18a9bd3bd0ee936c97578a7a2ca8b806ceb38"
        },
        "date": 1718573829297,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 13.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "4e14839f0e6532289fb76640d25da656e5d78099",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/4e14839f0e6532289fb76640d25da656e5d78099"
        },
        "date": 1718574813272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "d7d1a6d3c99dcf9bc006d992d279f722bdf5bb48",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/d7d1a6d3c99dcf9bc006d992d279f722bdf5bb48"
        },
        "date": 1718574853107,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 8.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b80dcb4ea83b26e0de49fe947c30ecc3e73d3939",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/b80dcb4ea83b26e0de49fe947c30ecc3e73d3939"
        },
        "date": 1718575776053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 12.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.005,
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
          "id": "53dabb26346a98be32f79c3c34f9d36802f01a6a",
          "message": "Introduce Valgrind to the CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/369/commits/53dabb26346a98be32f79c3c34f9d36802f01a6a"
        },
        "date": 1718601808563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.003,
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
          "id": "d1f5a0262e80adfbcc61b29e40e3d6919772b937",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-06-16T20:27:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/d1f5a0262e80adfbcc61b29e40e3d6919772b937"
        },
        "date": 1718602629989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "1e4ef3c8802143795e7f4f4e2fee04f995412793",
          "message": "Initialize ir->branch_table->PC with safe value",
          "timestamp": "2024-06-17T12:40:17Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/462/commits/1e4ef3c8802143795e7f4f4e2fee04f995412793"
        },
        "date": 1718628828773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b65d24c0adb4f2e222a8a70639ce5af36819c15f",
          "message": "Initialize ir->branch_table->PC with safe value",
          "timestamp": "2024-06-17T12:40:17Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/462/commits/b65d24c0adb4f2e222a8a70639ce5af36819c15f"
        },
        "date": 1718635324907,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6b462c03dc8c64863ae146a94fe7abffe4da19bb",
          "message": "jit: Introduce background compilation",
          "timestamp": "2024-06-18T04:33:55Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/6b462c03dc8c64863ae146a94fe7abffe4da19bb"
        },
        "date": 1718685701485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "51ce53be52b626176e58bde93664c0d86989377a",
          "message": "jit: Introduce background compilation",
          "timestamp": "2024-06-18T04:33:55Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/457/commits/51ce53be52b626176e58bde93664c0d86989377a"
        },
        "date": 1718687794320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "145e67dfbdd93b81c1520a6942913afe1cbf259d",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-17T12:40:17Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/145e67dfbdd93b81c1520a6942913afe1cbf259d"
        },
        "date": 1718914226696,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ba8ce2fa651ca50149871ab82d89d386f8b447fd",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/ba8ce2fa651ca50149871ab82d89d386f8b447fd"
        },
        "date": 1719011350192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 14,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "785ca82cd00897e9f40f0d7505a47bc70ebcaa1c",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/785ca82cd00897e9f40f0d7505a47bc70ebcaa1c"
        },
        "date": 1719011524473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "90d795ce987f248bb695540f0eacd77653c8651d",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/90d795ce987f248bb695540f0eacd77653c8651d"
        },
        "date": 1719011699438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.003,
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
          "id": "0947505ae1a5b129c66ea2795b0b822cbade10b2",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/0947505ae1a5b129c66ea2795b0b822cbade10b2"
        },
        "date": 1719012009674,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "5e8903d28d329d6e6802f44f046555afc4773e26",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/5e8903d28d329d6e6802f44f046555afc4773e26"
        },
        "date": 1719012192929,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.003,
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
          "id": "f977ccc6f1f886d6cb1093c9f29784dc89bda7a3",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/f977ccc6f1f886d6cb1093c9f29784dc89bda7a3"
        },
        "date": 1719012431124,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "25cac7643fc050b3e3049114cec4de1dbe783c9c",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/25cac7643fc050b3e3049114cec4de1dbe783c9c"
        },
        "date": 1719110790802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "890f2fdf4fbb649f4eccf61db9a5e1a184ffc0e9",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/890f2fdf4fbb649f4eccf61db9a5e1a184ffc0e9"
        },
        "date": 1719111082888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 10.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "23d23e0256a5558898184d905eae7a707b203c34",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/23d23e0256a5558898184d905eae7a707b203c34"
        },
        "date": 1719111485412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b47a9ddc4dceadfeb98d11b7457a4e51c6b85905",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b47a9ddc4dceadfeb98d11b7457a4e51c6b85905"
        },
        "date": 1719111574522,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.003,
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
          "id": "4fd8fe930292ebfe2f35e98cf1b54398577d23b6",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/4fd8fe930292ebfe2f35e98cf1b54398577d23b6"
        },
        "date": 1719111774554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "cf5ab438af11dd9d4aa90cc9bd985cf266c60a7d",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/cf5ab438af11dd9d4aa90cc9bd985cf266c60a7d"
        },
        "date": 1719111826022,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "cfc72395cdc95512d1a16fa35a8906774e68db3f",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/cfc72395cdc95512d1a16fa35a8906774e68db3f"
        },
        "date": 1719112628518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ba4a61c9daee2ca201126ed9e5cd3d56b9ed9a95",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/ba4a61c9daee2ca201126ed9e5cd3d56b9ed9a95"
        },
        "date": 1719134778511,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.83,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0784f59bb62644d17786d0bc9716cf075a96cce3",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/0784f59bb62644d17786d0bc9716cf075a96cce3"
        },
        "date": 1719145488452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "b98212c4ac0d753e6843edd7a8352af25b0d45ca",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b98212c4ac0d753e6843edd7a8352af25b0d45ca"
        },
        "date": 1719146099432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "5693dfa4b0bcdced8c321f58ab763af6fb2d5b62",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/5693dfa4b0bcdced8c321f58ab763af6fb2d5b62"
        },
        "date": 1719150691111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 9.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "38a9c3584dbb5c3e48394b888d133ff7c38fbb6f",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/38a9c3584dbb5c3e48394b888d133ff7c38fbb6f"
        },
        "date": 1719151714074,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e04d77ea54d33a3fcab0e533319ca2b3fc3a4a5d",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/e04d77ea54d33a3fcab0e533319ca2b3fc3a4a5d"
        },
        "date": 1719193752804,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "fd33ba09efb77bd0c8fe6219c2de5408f6b66be8",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/fd33ba09efb77bd0c8fe6219c2de5408f6b66be8"
        },
        "date": 1719245596863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e8c8ee93323ba716ff7c5f570d9af87067dd600c",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/e8c8ee93323ba716ff7c5f570d9af87067dd600c"
        },
        "date": 1719276591702,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "036662d1279be689ac2aa29c9fcd60b26a30b7c9",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/036662d1279be689ac2aa29c9fcd60b26a30b7c9"
        },
        "date": 1719339103207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "9d7f96d858cbd0923c8882c288d4e8850e5413d9",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/9d7f96d858cbd0923c8882c288d4e8850e5413d9"
        },
        "date": 1719339204274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "a2c759e11915f6204c6ad1bf51bf11df93bd3d80",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/a2c759e11915f6204c6ad1bf51bf11df93bd3d80"
        },
        "date": 1719339280196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.003,
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
          "id": "0946a98b13933fec36890ebd8ee39f800fa58f5d",
          "message": "Add RV32I memory ordering instruction FENCE",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/464/commits/0946a98b13933fec36890ebd8ee39f800fa58f5d"
        },
        "date": 1719593612305,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ebe8a63f59808b2e3080cee12989a710ac02abd7",
          "message": "Add RV32I memory ordering instruction FENCE",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/464/commits/ebe8a63f59808b2e3080cee12989a710ac02abd7"
        },
        "date": 1719593900681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "50bc9d801552813a5a9ab75acf53b77be8bec003",
          "message": "Add RV32I memory ordering instruction FENCE",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/464/commits/50bc9d801552813a5a9ab75acf53b77be8bec003"
        },
        "date": 1719594335395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "4ec1432149a9046bc6fd810743146793fcdf0be7",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-06-21T22:23:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/4ec1432149a9046bc6fd810743146793fcdf0be7"
        },
        "date": 1719760687250,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "a5e6db9bdd677f18508643913e8810aae238d889",
          "message": "Fix incorrect condition in background thread",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/465/commits/a5e6db9bdd677f18508643913e8810aae238d889"
        },
        "date": 1720026073965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "2985c0a6a6097499b4fd16cf08e8ffe2c23c0b70",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/2985c0a6a6097499b4fd16cf08e8ffe2c23c0b70"
        },
        "date": 1720046846650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 8.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "5ed6d7f027dd86d7cc093c62edc2533d1e5e0fb9",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/5ed6d7f027dd86d7cc093c62edc2533d1e5e0fb9"
        },
        "date": 1720048509050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 8,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "4af2f7af63a9a1f9b4e07fcec2b483d1caf112ed",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/4af2f7af63a9a1f9b4e07fcec2b483d1caf112ed"
        },
        "date": 1720049908469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 43.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "8c4bfaeb5db79fdfad64e89d3d009f3dc790da6c",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/8c4bfaeb5db79fdfad64e89d3d009f3dc790da6c"
        },
        "date": 1720050435191,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "1df00f2a78ea73d9645ec619be280f5e156402f4",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/1df00f2a78ea73d9645ec619be280f5e156402f4"
        },
        "date": 1720050594087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "289b81594cd78d0e4f7db2b6c0012f086cecb24e",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/289b81594cd78d0e4f7db2b6c0012f086cecb24e"
        },
        "date": 1720050918602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "9a6e05cf6ddeacffbad79daf6e6ba5402c98eb0b",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/9a6e05cf6ddeacffbad79daf6e6ba5402c98eb0b"
        },
        "date": 1720051870225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "54e4a0d987d1f6175b9311f923b881ada1c494b6",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/54e4a0d987d1f6175b9311f923b881ada1c494b6"
        },
        "date": 1720051968630,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "c8b65633a858dd08ab0738685547ebc1de850112",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/c8b65633a858dd08ab0738685547ebc1de850112"
        },
        "date": 1720052578155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0da80e17e007c01677f3dcf3bce94421f0858638",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/0da80e17e007c01677f3dcf3bce94421f0858638"
        },
        "date": 1720052799410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 10,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e647643c4b9a2e82fe247889bfb9543696a77f74",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/e647643c4b9a2e82fe247889bfb9543696a77f74"
        },
        "date": 1720052951134,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 14.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "7a68a6ce80a673e4d87b8586d9770a56b1ed470f",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/7a68a6ce80a673e4d87b8586d9770a56b1ed470f"
        },
        "date": 1720052983422,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "c72230f7e1568e019dbb20aa308c2217ef091793",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/c72230f7e1568e019dbb20aa308c2217ef091793"
        },
        "date": 1720053060282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "d48717207b459ab37f67e36f4efe161dcb1b011b",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/d48717207b459ab37f67e36f4efe161dcb1b011b"
        },
        "date": 1720053092738,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "68244ed5a46545ce9e13cc6fd8abbf79c40f677e",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/68244ed5a46545ce9e13cc6fd8abbf79c40f677e"
        },
        "date": 1720053194974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 13.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "298e8cb90c706aaabe705bba0d19355f8d27b229",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/298e8cb90c706aaabe705bba0d19355f8d27b229"
        },
        "date": 1720053258732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "05052c11e6fee16e64bcb4f9580ac10918dc2329",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/05052c11e6fee16e64bcb4f9580ac10918dc2329"
        },
        "date": 1720053335537,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 21.1,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e0fa93b692824f1d56008bf72ac7ea665b1c26c8",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/e0fa93b692824f1d56008bf72ac7ea665b1c26c8"
        },
        "date": 1720053682852,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "67e94276e0b0d7c19399bf462933e041919d635e",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/67e94276e0b0d7c19399bf462933e041919d635e"
        },
        "date": 1720053769289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "666d90ef08a36aa63060e1c626bccdf2bfb6a684",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/666d90ef08a36aa63060e1c626bccdf2bfb6a684"
        },
        "date": 1720053816881,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "7f71f0b882934d8d04618f7dddf491d56fb27df9",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/7f71f0b882934d8d04618f7dddf491d56fb27df9"
        },
        "date": 1720053976323,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 10.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "d987e3e7ba7de0b08eb7b4273b65e93ef5a5ac26",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/d987e3e7ba7de0b08eb7b4273b65e93ef5a5ac26"
        },
        "date": 1720054136955,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "da8c1f1f3dfd0f072508495baa762803a34f23db",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/da8c1f1f3dfd0f072508495baa762803a34f23db"
        },
        "date": 1720054234229,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "80f3ca2fc60e246917939460d5b27e82137f8124",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/80f3ca2fc60e246917939460d5b27e82137f8124"
        },
        "date": 1720054280180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "3b7fdf5c77a9f2add1065210da99bfd981cc76f0",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/3b7fdf5c77a9f2add1065210da99bfd981cc76f0"
        },
        "date": 1720054320262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6d4854026adbb752c3cd5bd48c79c1efb39d929d",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/6d4854026adbb752c3cd5bd48c79c1efb39d929d"
        },
        "date": 1720054449845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "99b02656ce2c366e143ac3e7ecba73490976c6c2",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/99b02656ce2c366e143ac3e7ecba73490976c6c2"
        },
        "date": 1720054511399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "2a4ec5f6120158ccc5407b536151e3d4e9331892",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/2a4ec5f6120158ccc5407b536151e3d4e9331892"
        },
        "date": 1720054534751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0e0d3eaa27914637b1621541b480769e1e65bc37",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/0e0d3eaa27914637b1621541b480769e1e65bc37"
        },
        "date": 1720054711801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0e0d3eaa27914637b1621541b480769e1e65bc37",
          "message": "[DO NOT MERGE] Github action pipeline testing",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/466/commits/0e0d3eaa27914637b1621541b480769e1e65bc37"
        },
        "date": 1720054800725,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 7.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "2f28090e3af87df2aeaaebdedcc59de8f9595c2f",
          "message": "[DO NOT MERGE] Github action pipeline testing",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/466/commits/2f28090e3af87df2aeaaebdedcc59de8f9595c2f"
        },
        "date": 1720055200053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0e0d3eaa27914637b1621541b480769e1e65bc37",
          "message": "[DO NOT MERGE] Github action pipeline testing",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/466/commits/0e0d3eaa27914637b1621541b480769e1e65bc37"
        },
        "date": 1720055213172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.5,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "9da20db403c6cc78392a506360493a6a2cacb9e2",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-02T20:03:33Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/9da20db403c6cc78392a506360493a6a2cacb9e2"
        },
        "date": 1720055284047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "8696d4380a18d76939f86ab40e86f03c64e3a708",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/8696d4380a18d76939f86ab40e86f03c64e3a708"
        },
        "date": 1720469187131,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "17d6701e09d441f34e1d76faa03bd73f02210dbe",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/17d6701e09d441f34e1d76faa03bd73f02210dbe"
        },
        "date": 1720469202602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "60ef6852e1e94e565234b1293877a4cefd1ca4dc",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/60ef6852e1e94e565234b1293877a4cefd1ca4dc"
        },
        "date": 1720469242841,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.22,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e0077b36ae4930b27e577e196f95dea865f60bfd",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/e0077b36ae4930b27e577e196f95dea865f60bfd"
        },
        "date": 1720469350286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "76629d253e834fca97bd65fefe66cdc82ef4e80d",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/76629d253e834fca97bd65fefe66cdc82ef4e80d"
        },
        "date": 1720470719951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "693213cc3cd6937167024f99a61e64a06aba0d92",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/693213cc3cd6937167024f99a61e64a06aba0d92"
        },
        "date": 1720471560007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "4ea8f291c2b121c547407a24a5af6935f7711438",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/4ea8f291c2b121c547407a24a5af6935f7711438"
        },
        "date": 1720526339940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "18ec9e12c47cff26ab2a7a11d2aace20b2ac7dfe",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/18ec9e12c47cff26ab2a7a11d2aace20b2ac7dfe"
        },
        "date": 1720526459005,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 14.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "f1c80d0f15a8b17b35e6457ec5d51b099d440fb2",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/f1c80d0f15a8b17b35e6457ec5d51b099d440fb2"
        },
        "date": 1720526566375,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6e4d6bf1638a1c2c1ad9670d6a91479490e8ee5c",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/6e4d6bf1638a1c2c1ad9670d6a91479490e8ee5c"
        },
        "date": 1720526658284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "868d8103afee80d209fb471eb71bcd5a65bb8848",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/868d8103afee80d209fb471eb71bcd5a65bb8848"
        },
        "date": 1720526887360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 5.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "09c476132f328412c992237c97bdc968881d74d5",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/09c476132f328412c992237c97bdc968881d74d5"
        },
        "date": 1720527024702,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "1c9e1edce8f670dc4268ba111220492b84dd9ed5",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/1c9e1edce8f670dc4268ba111220492b84dd9ed5"
        },
        "date": 1720527082218,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "6ea513be85c530f5d10f81b12b503766bc5ab359",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/6ea513be85c530f5d10f81b12b503766bc5ab359"
        },
        "date": 1720527094379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 11,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "23a23ebd354340dacae8e716ec0f6bd5c9b22f72",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/23a23ebd354340dacae8e716ec0f6bd5c9b22f72"
        },
        "date": 1720527220356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "e1fecd1790a5c37ef5afef9ed6e7e8a69361988f",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/e1fecd1790a5c37ef5afef9ed6e7e8a69361988f"
        },
        "date": 1720527437303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "f74fb11a1dbbd4de569a8e1eea2e7f70f65f117c",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/f74fb11a1dbbd4de569a8e1eea2e7f70f65f117c"
        },
        "date": 1720527649250,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "db9ee4d2a0efd57cb7454dd33f0c10353c1ea9cc",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/db9ee4d2a0efd57cb7454dd33f0c10353c1ea9cc"
        },
        "date": 1720527777483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 13.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "0bf82b84fc391175776a5f2a62f71ebd078d054b",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/0bf82b84fc391175776a5f2a62f71ebd078d054b"
        },
        "date": 1720527894053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.25,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "bd7ef0f7797d570229824c695134056dbe499085",
          "message": "Upgrade CI ubuntu version to 24.04",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/467/commits/bd7ef0f7797d570229824c695134056dbe499085"
        },
        "date": 1720531411491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 2.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "c3fe0bc92193ea3b2173b1db24649f3ac3c0fc95",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/c3fe0bc92193ea3b2173b1db24649f3ac3c0fc95"
        },
        "date": 1720540227326,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "ac20c15b33440921f93907f458c521bda17e02c1",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/ac20c15b33440921f93907f458c521bda17e02c1"
        },
        "date": 1720540564902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "48820ffd02341f1ba0cac965665a13f22730c7f4",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/48820ffd02341f1ba0cac965665a13f22730c7f4"
        },
        "date": 1720541124260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "202fb65d2fc194577ba42c4be727fec0986c8c03",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/202fb65d2fc194577ba42c4be727fec0986c8c03"
        },
        "date": 1720541855073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 8.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "569835481e25d449bb693d844480f544a16522f5",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/569835481e25d449bb693d844480f544a16522f5"
        },
        "date": 1720541899858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.75,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "867a53d60821978e23dc5d52d35b840abbc05de0",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/867a53d60821978e23dc5d52d35b840abbc05de0"
        },
        "date": 1720542570049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.44,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "c9d8c6d6250a295db28ba233d76e295c646dd9ea",
          "message": "Fix benchmark CI pipeline",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/460/commits/c9d8c6d6250a295db28ba233d76e295c646dd9ea"
        },
        "date": 1720553552949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.88,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "23afbb08074b23cfac0e986c11a5dd0b5a709c0b",
          "message": "Upgrade CI ubuntu version to 24.04",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/467/commits/23afbb08074b23cfac0e986c11a5dd0b5a709c0b"
        },
        "date": 1720555025934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 6.37,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "134214b2ad6c7241b751898c0ea86ed89cdcabc1",
          "message": "Upgrade CI ubuntu version to 24.04",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/467/commits/134214b2ad6c7241b751898c0ea86ed89cdcabc1"
        },
        "date": 1720556581296,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 3.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "66dec82a1bc9fe792dacace199aada34324f62b6",
          "message": "Fix a typo and remove outdated comment",
          "timestamp": "2024-07-08T20:04:02Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/468/commits/66dec82a1bc9fe792dacace199aada34324f62b6"
        },
        "date": 1720604675339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 4.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 0.004,
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
          "id": "f2e41a8d50722d4166a26d4457269ea7a82a79f8",
          "message": "Upgrade CI ubuntu version to 24.04",
          "timestamp": "2024-07-10T11:41:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/467/commits/f2e41a8d50722d4166a26d4457269ea7a82a79f8"
        },
        "date": 1720612058510,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1589.12,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1402.631,
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
          "id": "8ac3c95bfb03de4abbcca4d639056894a5e2df7f",
          "message": "Add Wait for Interrupt instruction (WFI)",
          "timestamp": "2024-07-21T15:04:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/470/commits/8ac3c95bfb03de4abbcca4d639056894a5e2df7f"
        },
        "date": 1721575370541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1630.77,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1490.998,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "c8f98768f01a87ccb4249a6d7bfde1481247a198",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/c8f98768f01a87ccb4249a6d7bfde1481247a198"
        },
        "date": 1722539846833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1571,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1410.04,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "913a15cdedc7b803df388058362434219bac27ec",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/913a15cdedc7b803df388058362434219bac27ec"
        },
        "date": 1722638524513,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1558.85,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1416.705,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "e40821854348559709e95db008a19b7fa3a6c6b2",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/e40821854348559709e95db008a19b7fa3a6c6b2"
        },
        "date": 1722651171317,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1593.62,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.811,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "0b22b09561c3f4b274573162c0ff937c4776fb6b",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/0b22b09561c3f4b274573162c0ff937c4776fb6b"
        },
        "date": 1722662112364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1567.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1398.035,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "c5f47393aa6a7735d2a09307f26b4584313e5e94",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/c5f47393aa6a7735d2a09307f26b4584313e5e94"
        },
        "date": 1722662234706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1600,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1403.529,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "f7b9ded8b28c4a252eb62c01185bf17a91e97370",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/f7b9ded8b28c4a252eb62c01185bf17a91e97370"
        },
        "date": 1722792717085,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1595.33,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1402.368,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "2b492f46612099d36fa9a092507d90030e7fd6cd",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/2b492f46612099d36fa9a092507d90030e7fd6cd"
        },
        "date": 1723050972016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1575.66,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.569,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "f5d04fb7973fd9165253d82af224fac4290002f2",
          "message": "Improve `JALR` execution with JIT-cache",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/471/commits/f5d04fb7973fd9165253d82af224fac4290002f2"
        },
        "date": 1723052361915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1602.55,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.431,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "1924bdfb5a0d1337fad2172348a3560e14fe614e",
          "message": "Fix jit-cache without T2C enabled",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/476/commits/1924bdfb5a0d1337fad2172348a3560e14fe614e"
        },
        "date": 1724176426321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1585.87,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1396.388,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "559dffeda2d1cec79e28dd1f6bc4cbe54e40f94e",
          "message": "Fix unexpected \"JALR\" behavior in JIT",
          "timestamp": "2024-07-03T08:33:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/479/commits/559dffeda2d1cec79e28dd1f6bc4cbe54e40f94e"
        },
        "date": 1724247837189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1593,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1405.282,
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
          "id": "e6cbf9a32e9df36e7515e0559611e52880facb9c",
          "message": "CI: Bump Ubuntu to 24.04-LTS\n\nUbuntu Linux 24.04 (noble) is the latest LTS release, and this commit\nupdates the CI pipeline hosts and recommended development environments\naccordingly. The version of clang-format is updated to v18, with all C\nsource files re-indented. LLVM is also upgraded to version 18.\n\nAfter the adjustment of benchmark iterations, Dhrystone and CoreMark\ntake significantly longer, and the aggregation script is limited to\nsingle run.",
          "timestamp": "2024-10-04T05:23:55+08:00",
          "tree_id": "d3eaa7d02517a22c09695b28e8447630c461f8e6",
          "url": "https://github.com/sysprog21/rv32emu/commit/e6cbf9a32e9df36e7515e0559611e52880facb9c"
        },
        "date": 1727991129999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1541,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1381.133,
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
          "id": "fd3956da8b95c7a3220b3391110ec5a7d90c9e77",
          "message": "CI: Bump Ubuntu to 24.04-LTS\n\nUbuntu Linux 24.04 (noble) is the latest LTS release, and this commit\nupdates the CI pipeline hosts and recommended development environments\naccordingly. The version of clang-format is updated to v18, with all C\nsource files re-indented. LLVM is also upgraded to version 18.\n\nAfter the adjustment of benchmark iterations, Dhrystone and CoreMark\ntake significantly longer, and the aggregation script is limited to\nsingle run.",
          "timestamp": "2024-10-04T05:52:00+08:00",
          "tree_id": "dff20980354ae10df927024f3f7ae6d7e73fc478",
          "url": "https://github.com/sysprog21/rv32emu/commit/fd3956da8b95c7a3220b3391110ec5a7d90c9e77"
        },
        "date": 1727992650268,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1593,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1370.845,
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
          "id": "57a047c4ea38bd484dd660b20e65b87ed48d3845",
          "message": "CI: Bump Ubuntu to 24.04-LTS\n\nUbuntu Linux 24.04 (noble) is the latest LTS release, and this commit\nupdates the CI pipeline hosts and recommended development environments\naccordingly. The version of clang-format is updated to v18, with all C\nsource files re-indented. LLVM is also upgraded to version 18.\n\nAfter the adjustment of benchmark iterations, Dhrystone and CoreMark\ntake significantly longer, and the aggregation script is limited to\nsingle run.",
          "timestamp": "2024-10-04T06:35:54+08:00",
          "tree_id": "d00669ee2a9b616826701884e639a996c3b9ef0e",
          "url": "https://github.com/sysprog21/rv32emu/commit/57a047c4ea38bd484dd660b20e65b87ed48d3845"
        },
        "date": 1727995297680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1598,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.83,
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
          "id": "73ccdf8434a892ebcaf048eabde55c16e51d6ebe",
          "message": "CI: Bump Ubuntu to 24.04-LTS\n\nUbuntu Linux 24.04 (noble) is the latest LTS release, and this commit\nupdates the CI pipeline hosts and recommended development environments\naccordingly. The version of clang-format is updated to v18, with all C\nsource files re-indented. LLVM is also upgraded to version 18.\n\nAfter the adjustment of benchmark iterations, Dhrystone and CoreMark\ntake significantly longer, and the aggregation script is limited to\nsingle run.",
          "timestamp": "2024-10-04T06:42:59+08:00",
          "tree_id": "44426f758eb585f34e1ecbc029d5385eafa8b32d",
          "url": "https://github.com/sysprog21/rv32emu/commit/73ccdf8434a892ebcaf048eabde55c16e51d6ebe"
        },
        "date": 1727995710112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1555,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.761,
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
          "id": "4d1fcb21552e815b6f62a2835c6325d48e271cc5",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/4d1fcb21552e815b6f62a2835c6325d48e271cc5"
        },
        "date": 1728399052342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1583,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.005,
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
          "id": "337dd3e9d0b4ea698b0c5b52a83030cc7a28e16b",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/337dd3e9d0b4ea698b0c5b52a83030cc7a28e16b"
        },
        "date": 1728399107423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1537,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1414.795,
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
          "id": "9a479ecbf78a1a25a2b5d1a342f680f0aab3acb4",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/9a479ecbf78a1a25a2b5d1a342f680f0aab3acb4"
        },
        "date": 1728399359900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1544,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.062,
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
          "id": "4af525769de9a33025678484f6e86cb063b1415c",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/4af525769de9a33025678484f6e86cb063b1415c"
        },
        "date": 1728400952918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1604,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.866,
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
          "id": "b99ed0a14c502d9481f8526fba5a211d826344aa",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/b99ed0a14c502d9481f8526fba5a211d826344aa"
        },
        "date": 1728401116188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1556,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1387.891,
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
          "id": "ae94aa13c7e1608a6b67ad4f087723575fd2e108",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/ae94aa13c7e1608a6b67ad4f087723575fd2e108"
        },
        "date": 1728401264402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1510,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.541,
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
          "id": "9509721465d20555dbc495eeac03cea2c37fa1ae",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/9509721465d20555dbc495eeac03cea2c37fa1ae"
        },
        "date": 1728401772767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1375.699,
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
          "id": "5e5396242d0d20db8b24cc5fc26d86958835452c",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/5e5396242d0d20db8b24cc5fc26d86958835452c"
        },
        "date": 1728418272623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1540,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1381.388,
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
          "id": "1b6ff4c95fe674bef5a0c653ebb9907a633cda43",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/1b6ff4c95fe674bef5a0c653ebb9907a633cda43"
        },
        "date": 1728419359826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1609,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1389.763,
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
          "id": "20618e8f0c78dca71be5f17ea1c368c95179baf3",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/20618e8f0c78dca71be5f17ea1c368c95179baf3"
        },
        "date": 1728419412872,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1549,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1410.217,
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
          "id": "dc0446104643edc85cf850a23928ba9a1c0c6a89",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/dc0446104643edc85cf850a23928ba9a1c0c6a89"
        },
        "date": 1728419933931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1554,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1433.079,
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
          "id": "53aaab0f0dcf0c2c9237aec4f8cbd69f10a67ea0",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/53aaab0f0dcf0c2c9237aec4f8cbd69f10a67ea0"
        },
        "date": 1728420147125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1516,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1404.09,
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
          "id": "20618e8f0c78dca71be5f17ea1c368c95179baf3",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-07T19:33:42Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/20618e8f0c78dca71be5f17ea1c368c95179baf3"
        },
        "date": 1728420887764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1576,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1398.073,
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
          "id": "7daa0454113f9b2c96febfca059fa3aeb7825a95",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-09T02:40:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/7daa0454113f9b2c96febfca059fa3aeb7825a95"
        },
        "date": 1728441982162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1606,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1399.571,
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
          "id": "af69876520d5867c71d8486de0a82cbd0330f985",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-09T02:40:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/af69876520d5867c71d8486de0a82cbd0330f985"
        },
        "date": 1728936482002,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1506,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.737,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "af2dcb0a46168d5d1668aeefc7c591e74b2619b6",
          "message": "Support RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/af2dcb0a46168d5d1668aeefc7c591e74b2619b6"
        },
        "date": 1729203126087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1535,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.081,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "33a693be1dab199dd2d8430613028540ac63a018",
          "message": "Support RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/33a693be1dab199dd2d8430613028540ac63a018"
        },
        "date": 1729203210052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1595,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1392.841,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "7de4a2a98909d109afcad97cec4ba9f78f830789",
          "message": "Support RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/7de4a2a98909d109afcad97cec4ba9f78f830789"
        },
        "date": 1729207336859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1523,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1427.276,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "11ea214572487072797536239be3486303401016",
          "message": "Support RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/11ea214572487072797536239be3486303401016"
        },
        "date": 1729212059730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1550,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1421.271,
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
          "id": "a28615f62f16d59d4df5d45f485e1c5421128393",
          "message": "Support trap handling during block emulation",
          "timestamp": "2024-10-09T02:40:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/a28615f62f16d59d4df5d45f485e1c5421128393"
        },
        "date": 1729231635923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1591,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1380.125,
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
          "id": "a4f6dab3f65c9ea2ae518e59dcd0f21ae8ac4576",
          "message": "Preliminary support for trap handling during block emulation",
          "timestamp": "2024-10-09T02:40:00Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/463/commits/a4f6dab3f65c9ea2ae518e59dcd0f21ae8ac4576"
        },
        "date": 1729235265736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1476,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1412.688,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "c5465ea4a7d70825e5ed9d57c71dc962bcf3ccf5",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/c5465ea4a7d70825e5ed9d57c71dc962bcf3ccf5"
        },
        "date": 1729244510098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1611,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.664,
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
          "id": "71eb51689c349ddb2345b1dcde73d139b52ca48e",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/71eb51689c349ddb2345b1dcde73d139b52ca48e"
        },
        "date": 1729372388634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1605,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.876,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "ad1a023c4ca3c46d56c2cc41b4eeca13ac10dc4a",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/ad1a023c4ca3c46d56c2cc41b4eeca13ac10dc4a"
        },
        "date": 1729433608874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1597,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1418.504,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "3407f666b7e4df89aeed9722814896c393111434",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/3407f666b7e4df89aeed9722814896c393111434"
        },
        "date": 1729434238388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.464,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "2dcaaf61d846d8e29a01108f2f5879176a86ffd9",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/2dcaaf61d846d8e29a01108f2f5879176a86ffd9"
        },
        "date": 1729434613682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1545,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.597,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "73db2902e409f46a7803bfaafdefc00c1c00de74",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/73db2902e409f46a7803bfaafdefc00c1c00de74"
        },
        "date": 1729436241053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1593,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1437.931,
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
          "id": "4ebb4d7c1e6e351e9806d3045e214d857242e789",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/4ebb4d7c1e6e351e9806d3045e214d857242e789"
        },
        "date": 1729448974832,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1524,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.961,
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
          "id": "997fe0015fea71e8b79405438d3db086d8347ee2",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/997fe0015fea71e8b79405438d3db086d8347ee2"
        },
        "date": 1729507981389,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1603,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1421.769,
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
          "id": "93d3fd0a4b037a16f469ce6094aa67e2424bc145",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/93d3fd0a4b037a16f469ce6094aa67e2424bc145"
        },
        "date": 1729528463170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1403.556,
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
          "id": "faddca0e58be8ad374627acc0fd6cb71adc99975",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/faddca0e58be8ad374627acc0fd6cb71adc99975"
        },
        "date": 1729528920281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1581,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1412.738,
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
          "id": "89aab2006749e02f193433b7a4519142d9dbdb93",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/89aab2006749e02f193433b7a4519142d9dbdb93"
        },
        "date": 1729530340464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1555,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1402.634,
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
          "id": "5aac76aeb14a556c6d646fb7f589ea69b3c268cf",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/5aac76aeb14a556c6d646fb7f589ea69b3c268cf"
        },
        "date": 1729530465791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1539,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1417.122,
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
          "id": "f99212ebe582865fb8b19d4a4b9e88a514ea0efa",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/f99212ebe582865fb8b19d4a4b9e88a514ea0efa"
        },
        "date": 1729584116567,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1601,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1411.761,
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
          "id": "a90a735ce9e5c20a410a6fd62a29337220608b5c",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/a90a735ce9e5c20a410a6fd62a29337220608b5c"
        },
        "date": 1729584288946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1589,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1394.492,
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
          "id": "ce352bf2c5f120e30c3761c126c3bcb4ad949600",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/ce352bf2c5f120e30c3761c126c3bcb4ad949600"
        },
        "date": 1729585295775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1600,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1405.795,
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
          "id": "96ced0504fb2e52cf308895d204ec3717516c7d1",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/96ced0504fb2e52cf308895d204ec3717516c7d1"
        },
        "date": 1729697197220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1589,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1423.685,
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
          "id": "0cbb988a68fdeaa3e1dc4a18a02f9fed2ee819d2",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/0cbb988a68fdeaa3e1dc4a18a02f9fed2ee819d2"
        },
        "date": 1729698216545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1565,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1408.525,
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
          "id": "18d127fe0a8939f93def48d11cb4a40b1efe777e",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/18d127fe0a8939f93def48d11cb4a40b1efe777e"
        },
        "date": 1729698284987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1586,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1402.095,
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
          "id": "cd178caffc151ad703a9c5b638722c83fed382f4",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/cd178caffc151ad703a9c5b638722c83fed382f4"
        },
        "date": 1729699574811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1612,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1423.049,
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
          "id": "e82a9829eafb16d1f8adc4ed51b0e6ce80315d58",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/e82a9829eafb16d1f8adc4ed51b0e6ce80315d58"
        },
        "date": 1729702058739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1475,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1405.269,
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
          "id": "d784b88448f9f639a049c185f9ff5e1cb79a338d",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/d784b88448f9f639a049c185f9ff5e1cb79a338d"
        },
        "date": 1729703260678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1570,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1420.782,
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
          "id": "b35f7448c11b5c8698d479921e40b9cf8d3c7bcc",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b35f7448c11b5c8698d479921e40b9cf8d3c7bcc"
        },
        "date": 1729729055722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1577,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1418.311,
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
          "id": "6ba15469772c1bcf30adb9a4911651f3021f6d22",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/6ba15469772c1bcf30adb9a4911651f3021f6d22"
        },
        "date": 1729894058069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1570,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1382.661,
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
          "id": "3ce7c5a5398b710abb95c8b6e786e4a4f8eab4e2",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/3ce7c5a5398b710abb95c8b6e786e4a4f8eab4e2"
        },
        "date": 1729894155994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1526,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.697,
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
          "id": "92c35970c39c577fccb3805e7449820d9354bf9c",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/92c35970c39c577fccb3805e7449820d9354bf9c"
        },
        "date": 1729894380945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1608,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1424.951,
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
          "id": "d926f2f61c322e4330f92421e2a2d7e48e486f26",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/d926f2f61c322e4330f92421e2a2d7e48e486f26"
        },
        "date": 1729894554361,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1605,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.34,
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
          "id": "f8cdb6913191c5c7768c179101a6d9623da335b8",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/f8cdb6913191c5c7768c179101a6d9623da335b8"
        },
        "date": 1729894738049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1596,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1410.685,
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
          "id": "25c329817780139e1c65d22e170f682bd1321a77",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/25c329817780139e1c65d22e170f682bd1321a77"
        },
        "date": 1729920602786,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1570,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.61,
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
          "id": "aeda753157e7208ff0603ea70a4a3f47d8bee165",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/aeda753157e7208ff0603ea70a4a3f47d8bee165"
        },
        "date": 1729922198252,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1577,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1418.226,
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
          "id": "68d7534fa745a1101ef71010610175f7ad2d909d",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/68d7534fa745a1101ef71010610175f7ad2d909d"
        },
        "date": 1729923945081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1617,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1388.268,
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
          "id": "b44a5af38a3feae584fbb9d4ec2b06036548e25b",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b44a5af38a3feae584fbb9d4ec2b06036548e25b"
        },
        "date": 1729925084441,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1539,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.252,
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
          "id": "42896f1fe10187772e17e8530802b54c04bcb827",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/42896f1fe10187772e17e8530802b54c04bcb827"
        },
        "date": 1729928932784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1558,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1412.644,
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
          "id": "5e9592ee6c8550bdbbf45d01ba3c20c72468a278",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/5e9592ee6c8550bdbbf45d01ba3c20c72468a278"
        },
        "date": 1729931276266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1570,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1342.665,
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
          "id": "65478463f2f13d2087dd3e2cb1a727a70a787cea",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/65478463f2f13d2087dd3e2cb1a727a70a787cea"
        },
        "date": 1729959445373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1588,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1423.532,
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
          "id": "99acca36a67ccaa2021ae221d2cffc1dfaeeed2e",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/99acca36a67ccaa2021ae221d2cffc1dfaeeed2e"
        },
        "date": 1729977549742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1536,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1376.92,
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
          "id": "b0d2e79c8479b8679c35f05e92b59e8d54062f5c",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/b0d2e79c8479b8679c35f05e92b59e8d54062f5c"
        },
        "date": 1730016974850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1574,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1399.064,
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
          "id": "1ba68ccc3ce1c058444e5ba7093639b8a79a5c8e",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/1ba68ccc3ce1c058444e5ba7093639b8a79a5c8e"
        },
        "date": 1730061597025,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1558,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1406.118,
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
          "id": "ac9fa59eb159206e447b3c95397640802249f266",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/ac9fa59eb159206e447b3c95397640802249f266"
        },
        "date": 1730062041708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1557,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.177,
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
          "id": "266e477d52e6b97aaada1f070466545356a40925",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/266e477d52e6b97aaada1f070466545356a40925"
        },
        "date": 1730062174285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1573,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1380.265,
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
          "id": "79302e243631a093d8c647e5e7da621053ab8cb6",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/79302e243631a093d8c647e5e7da621053ab8cb6"
        },
        "date": 1730132509212,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1610,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1414.587,
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
          "id": "63176056e9b85c1d6c96517b91da250bcc216e74",
          "message": "Preliminary support for MMU emulation",
          "timestamp": "2024-10-19T08:43:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/438/commits/63176056e9b85c1d6c96517b91da250bcc216e74"
        },
        "date": 1730132817683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1422,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1431.449,
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
          "id": "ccb235816ed9c976862024ab50979c689d8509a8",
          "message": "Apply editorial changes",
          "timestamp": "2024-10-29T00:57:12+08:00",
          "tree_id": "cd68a09de2c54765919cc6ac8385793da52bb9fd",
          "url": "https://github.com/sysprog21/rv32emu/commit/ccb235816ed9c976862024ab50979c689d8509a8"
        },
        "date": 1730134971714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1539,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.86,
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
          "id": "b21d054ddf6afe824ee403537f3148c919310067",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T16:48:04Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b21d054ddf6afe824ee403537f3148c919310067"
        },
        "date": 1730143012761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1505,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1440.037,
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
          "id": "fd878843b4d665074552f85bd9ac7615fa0d1b35",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/fd878843b4d665074552f85bd9ac7615fa0d1b35"
        },
        "date": 1730143199883,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1521,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1439.218,
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
          "id": "84ea32f23242dc41378c3231deb79d3ee073eeeb",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/84ea32f23242dc41378c3231deb79d3ee073eeeb"
        },
        "date": 1730427105201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1535,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1403.237,
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
          "id": "cfb3c3ae1f0854b09926f9a3ec919e0383d265d0",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/cfb3c3ae1f0854b09926f9a3ec919e0383d265d0"
        },
        "date": 1730446631353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1526,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1434.13,
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
          "id": "ee008f1b722241539d0ca31bc67076f4c40fee22",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ee008f1b722241539d0ca31bc67076f4c40fee22"
        },
        "date": 1730535861918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1535,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1443.763,
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
          "id": "011c1fba1bb30ba737d3d0edc7227a073782ffb8",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/011c1fba1bb30ba737d3d0edc7227a073782ffb8"
        },
        "date": 1730535929077,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1536,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.559,
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
          "id": "d8bf586a57c991d4238aed3824b6748c986c8df1",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/d8bf586a57c991d4238aed3824b6748c986c8df1"
        },
        "date": 1730536049480,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1447,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1429.364,
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
          "id": "57491c0a1ec30453b181cd82258f36e4e16d2f7e",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/57491c0a1ec30453b181cd82258f36e4e16d2f7e"
        },
        "date": 1730537246548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1527,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1417.151,
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
          "id": "e80ec8d9471bee5b2488a38f4b7a804a5dc84bf5",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e80ec8d9471bee5b2488a38f4b7a804a5dc84bf5"
        },
        "date": 1730541216448,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1438.531,
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
          "id": "c9a33734b2020c2df0bf2ba16f9ab028651716c4",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/c9a33734b2020c2df0bf2ba16f9ab028651716c4"
        },
        "date": 1730541551392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1540,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1436.26,
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
          "id": "6b5f105ae4ece69f22646bd6a77bba1a9077d81a",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/6b5f105ae4ece69f22646bd6a77bba1a9077d81a"
        },
        "date": 1730543997810,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1530,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1433.173,
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
          "id": "18d87e6ea8157ba74d42ebdc17296ca52dfacfaa",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/18d87e6ea8157ba74d42ebdc17296ca52dfacfaa"
        },
        "date": 1730548977781,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1535,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1430.998,
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
          "id": "459cf5c50019df38506cf9f94e70169880f756b4",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/459cf5c50019df38506cf9f94e70169880f756b4"
        },
        "date": 1730549767094,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1503,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1441.967,
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
          "id": "c5384ad8645299543c53290aa548704dd08fc4a3",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/c5384ad8645299543c53290aa548704dd08fc4a3"
        },
        "date": 1730550557050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1427.213,
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
          "id": "6466aa1e8edb5480b0ba46c8f58372fd06e5ab3f",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/6466aa1e8edb5480b0ba46c8f58372fd06e5ab3f"
        },
        "date": 1730552127147,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1460,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1401.96,
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
          "id": "5eee727e7b14b333c443957acaa08ef0e90e0f32",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/5eee727e7b14b333c443957acaa08ef0e90e0f32"
        },
        "date": 1730552797675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1532,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1445.447,
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
          "id": "dd0b1c540455ba40e44afcb37659570f812f6450",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/dd0b1c540455ba40e44afcb37659570f812f6450"
        },
        "date": 1730552905612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1522,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1435.744,
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
          "id": "261b2be154c9fb5635d5e7597c9546765156d358",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/261b2be154c9fb5635d5e7597c9546765156d358"
        },
        "date": 1730560444761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1429.542,
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
          "id": "dd0b1c540455ba40e44afcb37659570f812f6450",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/dd0b1c540455ba40e44afcb37659570f812f6450"
        },
        "date": 1730561041357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1535,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1440.666,
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
          "id": "4012f2a16dba701c2d6263942810b41749155758",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/4012f2a16dba701c2d6263942810b41749155758"
        },
        "date": 1730562821971,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1538,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1435.963,
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
          "id": "e268d64688219816d80072b0788e0df4af93c03e",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e268d64688219816d80072b0788e0df4af93c03e"
        },
        "date": 1730621109165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1584,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1451.239,
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
          "id": "071b55dbcdd66a1734944a72440dc787d541bee2",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/071b55dbcdd66a1734944a72440dc787d541bee2"
        },
        "date": 1730621825783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1530,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1399.215,
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
          "id": "7f8efd325aebf7ab6506837d2b41305c49a16d8c",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/7f8efd325aebf7ab6506837d2b41305c49a16d8c"
        },
        "date": 1730743394650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1533,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1439.16,
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
          "id": "ea27271b68d8fc0ef089ece53b6289589595c99b",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ea27271b68d8fc0ef089ece53b6289589595c99b"
        },
        "date": 1730743490526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1540,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1439.452,
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
          "id": "5b64af8c8fa0c930dfeb4691b3b74c0eb66467b0",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/5b64af8c8fa0c930dfeb4691b3b74c0eb66467b0"
        },
        "date": 1730743724820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1544,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1418.863,
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
          "id": "0915b75fcc544b191737401b5bdd210cdeb4de7d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/0915b75fcc544b191737401b5bdd210cdeb4de7d"
        },
        "date": 1730744428194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1546,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.262,
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
          "id": "e2bb7f07da8650da0aa0a3b279058ea39eee3d83",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e2bb7f07da8650da0aa0a3b279058ea39eee3d83"
        },
        "date": 1730747237160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1537,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1431.327,
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
          "id": "b2dfe750be5b1d1ce98a6a7b9827cf23bd33ea90",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-10-28T19:13:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b2dfe750be5b1d1ce98a6a7b9827cf23bd33ea90"
        },
        "date": 1730835387795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1542,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1434.435,
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
          "id": "93d53a6842361b03a959f15933e861d1f191977e",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/93d53a6842361b03a959f15933e861d1f191977e"
        },
        "date": 1730838409835,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1482,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1439.396,
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
          "id": "bbfd61b40b2259ede94e42c3b0aab5018f812137",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/bbfd61b40b2259ede94e42c3b0aab5018f812137"
        },
        "date": 1730838460137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1523,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1429.072,
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
          "id": "62d101fd08b098de0fbd76f87d6e850883367513",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/62d101fd08b098de0fbd76f87d6e850883367513"
        },
        "date": 1730840919488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1525,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1424.637,
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
          "id": "91c02876e217c021fa6274e304e500a86e72c3a1",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/91c02876e217c021fa6274e304e500a86e72c3a1"
        },
        "date": 1730896721464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1522,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.387,
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
          "id": "757bc107cfb23f9557e96d3f4c8dd45b95854da9",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/757bc107cfb23f9557e96d3f4c8dd45b95854da9"
        },
        "date": 1730917941689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1508,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1402.316,
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
          "id": "8a2698b716c87bdaddce60fbe15c58e852dc419a",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/8a2698b716c87bdaddce60fbe15c58e852dc419a"
        },
        "date": 1730918246722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1527,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1427.412,
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
          "id": "84e5ae4c0322ac0cc05f791bbcfcba7b1a0d13a7",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/84e5ae4c0322ac0cc05f791bbcfcba7b1a0d13a7"
        },
        "date": 1730925679991,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1547,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1404.033,
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
          "id": "71516902a26da3901e79e6d7863198a023d7186f",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/71516902a26da3901e79e6d7863198a023d7186f"
        },
        "date": 1730925840993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1538,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1426.45,
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
          "id": "ae43cc4bb9d8a03ee876e67c4eb906cb187236ce",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ae43cc4bb9d8a03ee876e67c4eb906cb187236ce"
        },
        "date": 1731258479743,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1507,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1435.819,
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
          "id": "fcf5848fea4d24d2ff10b5694c9fbf87298df208",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/fcf5848fea4d24d2ff10b5694c9fbf87298df208"
        },
        "date": 1731258938613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1527,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1443.231,
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
          "id": "3432824064c9d1cd3ad45bbb041a6999b49413c2",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/3432824064c9d1cd3ad45bbb041a6999b49413c2"
        },
        "date": 1731317373537,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1538,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1433.474,
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
          "id": "bb46246150e3fe15ef785fee20df028a018274a7",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/bb46246150e3fe15ef785fee20df028a018274a7"
        },
        "date": 1731327400867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1518,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1421.621,
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
          "id": "fa9181b039e71979e6eb3dedc7d6a25cf8c4bdaa",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/fa9181b039e71979e6eb3dedc7d6a25cf8c4bdaa"
        },
        "date": 1731328708518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1530,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.833,
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
          "id": "c5d5e31b95dc4797266962ef16af94607b87ef4b",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/c5d5e31b95dc4797266962ef16af94607b87ef4b"
        },
        "date": 1731330927046,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.257,
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
          "id": "64abe47864a99d98857e30713af9dea5579a0dd3",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/64abe47864a99d98857e30713af9dea5579a0dd3"
        },
        "date": 1731331242051,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1537,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1415.078,
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
          "id": "f60e6628081849d5c2166d34dc21879a6dfc58e2",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/f60e6628081849d5c2166d34dc21879a6dfc58e2"
        },
        "date": 1731332059118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1539,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1444.799,
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
          "id": "13062be964d3d694723bb1902d8e077634673873",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/13062be964d3d694723bb1902d8e077634673873"
        },
        "date": 1731337963705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1526,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1435.698,
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
          "id": "6d8f3a325ea33e56ff2a6fd0ac6c6e61e45bd16d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/6d8f3a325ea33e56ff2a6fd0ac6c6e61e45bd16d"
        },
        "date": 1731338395241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1528,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1434.657,
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
          "id": "e4481d6826cf084da8796f890f8affcff48062ed",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e4481d6826cf084da8796f890f8affcff48062ed"
        },
        "date": 1731338629266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1526,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1449.122,
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
          "id": "201f7cc2a2f3d65e4301e2d9c3fb94d0a2f2ad3d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/201f7cc2a2f3d65e4301e2d9c3fb94d0a2f2ad3d"
        },
        "date": 1731383209417,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1533,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1393.074,
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
          "id": "ab8b75661459846ba594f843f6ce1b854362fddc",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ab8b75661459846ba594f843f6ce1b854362fddc"
        },
        "date": 1731391455112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1533,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1420.683,
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
          "id": "36d664e3011ed2cce4dbc639c559f362fdda76f7",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/36d664e3011ed2cce4dbc639c559f362fdda76f7"
        },
        "date": 1731433914033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1530,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1417.099,
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
          "id": "0574e350234cf3f760bf049a509f8b9eed7c040b",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-11-05T20:01:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/0574e350234cf3f760bf049a509f8b9eed7c040b"
        },
        "date": 1732204552049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1515,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1426.81,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "1a12fd62ffd3cd6a86bcd608f52e337a2fb279cf",
          "message": "Drop unused structure \"chain_entry_t\"",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/515/commits/1a12fd62ffd3cd6a86bcd608f52e337a2fb279cf"
        },
        "date": 1732382457454,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1522,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1403.675,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "4b32e328760e3bb5bae5682774c309f66390ed26",
          "message": "Drop unused structure \"chain_entry_t\"",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/515/commits/4b32e328760e3bb5bae5682774c309f66390ed26"
        },
        "date": 1732383669614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1542,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1439.724,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "9225e3b50fd2d7e5a66ebd8b64fff36d897fd7ca",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/9225e3b50fd2d7e5a66ebd8b64fff36d897fd7ca"
        },
        "date": 1733007610281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1550,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.498,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "f092a89cd8c1998de9d5f0daedeeda0a8b4410a9",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/f092a89cd8c1998de9d5f0daedeeda0a8b4410a9"
        },
        "date": 1733010747664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1473,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1416.118,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "09a3d1a48e7405bc6ebf166c0e2d1b38d90e7a0c",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/09a3d1a48e7405bc6ebf166c0e2d1b38d90e7a0c"
        },
        "date": 1733132466897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1544,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1431.72,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "ec6804ca1ed6f0d7d99961e1ab52b24cf8727bed",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/ec6804ca1ed6f0d7d99961e1ab52b24cf8727bed"
        },
        "date": 1733139429987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1551,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1397.778,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "266f2692ae0e464d45b1dc8c5ed8511aaeb298cd",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/266f2692ae0e464d45b1dc8c5ed8511aaeb298cd"
        },
        "date": 1733153494855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1551,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1420.243,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "05d31c1af0aa5935324114c4e5370bd914525ff6",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/05d31c1af0aa5935324114c4e5370bd914525ff6"
        },
        "date": 1733158384290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1405.886,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "65a28d90ae70fa09d9b702fcb9a9c87ed47f98a2",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/65a28d90ae70fa09d9b702fcb9a9c87ed47f98a2"
        },
        "date": 1733177682975,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1543,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.692,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "1820c9dada850700f4cc66725bea643c7298f38c",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/1820c9dada850700f4cc66725bea643c7298f38c"
        },
        "date": 1733226151286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1555,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1424.794,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "7f1c234dbaa975ff5fc6725ed28d80fdbfdb460a",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/7f1c234dbaa975ff5fc6725ed28d80fdbfdb460a"
        },
        "date": 1733226310875,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1563,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1412.845,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "448f434b8628c5dfb72a4ba64b531f7734109c5b",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/448f434b8628c5dfb72a4ba64b531f7734109c5b"
        },
        "date": 1733230059991,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1556,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1400.104,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "5ffb157eeaecdfd165f26949914fd8e7a326e217",
          "message": "jit: Replace LFU with LRU cache replacement policy",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/518/commits/5ffb157eeaecdfd165f26949914fd8e7a326e217"
        },
        "date": 1733243779412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1512,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1399.459,
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
          "id": "c0aff87211737a2a37336e11cb97a229e0f7cf30",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/c0aff87211737a2a37336e11cb97a229e0f7cf30"
        },
        "date": 1733450632683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1398.215,
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
          "id": "688275247875ff225df33114d5cfd36d2a72a49c",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/688275247875ff225df33114d5cfd36d2a72a49c"
        },
        "date": 1733517980906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1556,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.101,
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
          "id": "29a45bd8cb2b21d1de9c79d44e4ed96ebc7ffa16",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/29a45bd8cb2b21d1de9c79d44e4ed96ebc7ffa16"
        },
        "date": 1733518697012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1563,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1411.772,
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
          "id": "4ef0ff4c9a86d0ca7ef58c18aa7a3251348fe5ed",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/4ef0ff4c9a86d0ca7ef58c18aa7a3251348fe5ed"
        },
        "date": 1733669024548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.384,
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
          "id": "3ea929764b84220b9fcb5ce57f0dfb130b937e9d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/3ea929764b84220b9fcb5ce57f0dfb130b937e9d"
        },
        "date": 1733670655905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1553,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1417.802,
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
          "id": "3dcc5020414330880cafe1d18244d6c839bf749b",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/3dcc5020414330880cafe1d18244d6c839bf749b"
        },
        "date": 1733671316033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1411.935,
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
          "id": "b47aece055d7668a03fd3f3644c1bf712b4f9a12",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b47aece055d7668a03fd3f3644c1bf712b4f9a12"
        },
        "date": 1733671731492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1538,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1418.129,
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
          "id": "2f8241a9741c42e184c629cd6a849c187cbede76",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/2f8241a9741c42e184c629cd6a849c187cbede76"
        },
        "date": 1733671886573,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1553,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1428.395,
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
          "id": "ab69c6cd0916c19f9b79fab9ae6cb28423debbea",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ab69c6cd0916c19f9b79fab9ae6cb28423debbea"
        },
        "date": 1733761922340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1396,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.339,
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
          "id": "63a2f1110d5877961e7076d67bcc0e1c0b866bf9",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/63a2f1110d5877961e7076d67bcc0e1c0b866bf9"
        },
        "date": 1733768186999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1555,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1419.255,
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
          "id": "5bbe8fff23411c65a9bdfb3df12efe94c154cd2f",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/5bbe8fff23411c65a9bdfb3df12efe94c154cd2f"
        },
        "date": 1733774206936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1564,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1400.41,
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
          "id": "d1709763277aab338057c940a88b50a606dda35a",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/d1709763277aab338057c940a88b50a606dda35a"
        },
        "date": 1733774327863,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1544,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1383.309,
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
          "id": "9bbcca0422aa9738adf1e5e7ae060500ba2a7306",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/9bbcca0422aa9738adf1e5e7ae060500ba2a7306"
        },
        "date": 1733775682614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1558,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1433.05,
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
          "id": "d66d5e3b16a24b9f28ebb88f8fe4657fdf181c0d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/d66d5e3b16a24b9f28ebb88f8fe4657fdf181c0d"
        },
        "date": 1733776331160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1547,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1385.944,
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
          "id": "b2a13568dfc933e2766799fdf66a1a1325b7b04d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b2a13568dfc933e2766799fdf66a1a1325b7b04d"
        },
        "date": 1733776439915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1534,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1424.003,
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
          "id": "b47c0ca19d34472b752fb89a179142d239ec8ef0",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b47c0ca19d34472b752fb89a179142d239ec8ef0"
        },
        "date": 1733854353927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1241,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.581,
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
          "id": "b4329fbf760b9dffb58d591f8aa3ccdefeab3e50",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/b4329fbf760b9dffb58d591f8aa3ccdefeab3e50"
        },
        "date": 1733854412734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1557,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.348,
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
          "id": "6e8e87d4e2fd940f4a51849d9dcdb2c0fd2adbdc",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/6e8e87d4e2fd940f4a51849d9dcdb2c0fd2adbdc"
        },
        "date": 1733863052445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1425.655,
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
          "id": "7f8e9a5122afc955086a910df828b81ae7bf3ded",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/7f8e9a5122afc955086a910df828b81ae7bf3ded"
        },
        "date": 1733863523896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1553,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1412.829,
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
          "id": "681a1051239fa73488370de9121d4255e44d2477",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/681a1051239fa73488370de9121d4255e44d2477"
        },
        "date": 1733863599552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1520,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1416.796,
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
          "id": "cf86aa491dd3e81b2291c2d9f763a5ecc8e90e2e",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/cf86aa491dd3e81b2291c2d9f763a5ecc8e90e2e"
        },
        "date": 1733863748194,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1550,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1433.342,
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
          "id": "1317eb2c9bdb8e2edb312bff4efad552e39769a7",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/1317eb2c9bdb8e2edb312bff4efad552e39769a7"
        },
        "date": 1733863887356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1507,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1389.227,
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
          "id": "2657bdc90db0e4d2f31d625f3882b8909374c7ef",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/2657bdc90db0e4d2f31d625f3882b8909374c7ef"
        },
        "date": 1733864098169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1551,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1390.744,
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
          "id": "9a30f71f1ac44c3e4d4ebc6623f7809693cfbc45",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/9a30f71f1ac44c3e4d4ebc6623f7809693cfbc45"
        },
        "date": 1733864498323,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1578,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1404.407,
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
          "id": "817804ad5516682420a3b513d0ff0116aa3c8790",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/817804ad5516682420a3b513d0ff0116aa3c8790"
        },
        "date": 1733865449812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1547,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.874,
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
          "id": "ee0f8113a85d9fde4ec505eb5866dad923e1688c",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/ee0f8113a85d9fde4ec505eb5866dad923e1688c"
        },
        "date": 1734184549657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1561,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1406.873,
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
          "id": "a57f74650e77ec0c840256d503b50914183129ce",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/a57f74650e77ec0c840256d503b50914183129ce"
        },
        "date": 1734185434260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1545,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1391.306,
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
          "id": "7913e4a28a37e2f96e3367fb3f16b831528e5ba0",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/7913e4a28a37e2f96e3367fb3f16b831528e5ba0"
        },
        "date": 1734189719993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1549,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1400.444,
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
          "id": "e7edcacb8be66b1717c4bde78a2f5858b0c26369",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e7edcacb8be66b1717c4bde78a2f5858b0c26369"
        },
        "date": 1734199050836,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1557,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1416.996,
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
          "id": "d7bff9af4969362b9010667052fd242326f9ad78",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/d7bff9af4969362b9010667052fd242326f9ad78"
        },
        "date": 1734199479971,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1536,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1392.552,
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
          "id": "3f0e4e7ae00c0684b3a60ba457f9051ff8cdee6d",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/3f0e4e7ae00c0684b3a60ba457f9051ff8cdee6d"
        },
        "date": 1734200780555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1520,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1410.132,
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
          "id": "7378cb46d257d6f1dc0b75363913d293344dc9e0",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/7378cb46d257d6f1dc0b75363913d293344dc9e0"
        },
        "date": 1734201112070,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1474,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1422.377,
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
          "id": "f315282275876d05cecbf7f825804d06d4121774",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/f315282275876d05cecbf7f825804d06d4121774"
        },
        "date": 1734204503922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1314,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1368.115,
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
          "id": "4a9a94d37576f61cf35aea8914ea4922e6b757c9",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/4a9a94d37576f61cf35aea8914ea4922e6b757c9"
        },
        "date": 1734205714658,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1522,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1420.375,
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
          "id": "09e01cf0ada43ca23a8e3895e14924d48b0a0117",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/09e01cf0ada43ca23a8e3895e14924d48b0a0117"
        },
        "date": 1734205797189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1550,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1395.971,
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
          "id": "a5fc69d574d9077903fe90e3eebe3f2f6998dd89",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/a5fc69d574d9077903fe90e3eebe3f2f6998dd89"
        },
        "date": 1734209704423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1538,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1417.18,
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
          "id": "2f39cb85ab046d77243ba478f8d6d4cc4923706e",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/2f39cb85ab046d77243ba478f8d6d4cc4923706e"
        },
        "date": 1734248025750,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1551,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1394.866,
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
          "id": "66118d78ef6b418f40801d93972613af61810fd1",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/66118d78ef6b418f40801d93972613af61810fd1"
        },
        "date": 1734248598580,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1566,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.871,
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
          "id": "0c6ffb5b66fa69bf1ac0340eb4e53791272bb059",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/0c6ffb5b66fa69bf1ac0340eb4e53791272bb059"
        },
        "date": 1734285609806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1541,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1413.536,
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
          "id": "15ebc636c994fbd52ccab2ec33c9375112086a50",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/15ebc636c994fbd52ccab2ec33c9375112086a50"
        },
        "date": 1734285714729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1553,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1395.912,
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
          "id": "7a1aabccfb1436bcc4edacdd71705e1147964438",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/7a1aabccfb1436bcc4edacdd71705e1147964438"
        },
        "date": 1734286001983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1557,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1407.756,
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
          "id": "e7b032254c51d5856db1f9dc1a207e43746b71d7",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/e7b032254c51d5856db1f9dc1a207e43746b71d7"
        },
        "date": 1734286190749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1512,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1414.019,
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
          "id": "d6c317ffbc1fc84dc7c9a0fd005ed655e712ffff",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/d6c317ffbc1fc84dc7c9a0fd005ed655e712ffff"
        },
        "date": 1734332982049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1548,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1427.067,
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
          "id": "94abf43096ff6964acc7c89ea29534a6e85cf121",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/94abf43096ff6964acc7c89ea29534a6e85cf121"
        },
        "date": 1734334781188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1552,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1383.368,
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
          "id": "0db8b7620b5292d39401c00defda3ab5dfae7f72",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/0db8b7620b5292d39401c00defda3ab5dfae7f72"
        },
        "date": 1734336641887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1545,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.235,
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
          "id": "3ef4675e535c60b66697d281ceaf495771d08374",
          "message": "Bring up Linux kernel",
          "timestamp": "2024-12-05T06:01:31Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/508/commits/3ef4675e535c60b66697d281ceaf495771d08374"
        },
        "date": 1734350020807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1547,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 1409.44,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "330a5748c6abad1d022800bcd4e7554e1d52c5ab",
          "message": "Support just-in-time (JIT) compilation in system simulation ",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/330a5748c6abad1d022800bcd4e7554e1d52c5ab"
        },
        "date": 1734423827817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1305,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 979.653,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "330a5748c6abad1d022800bcd4e7554e1d52c5ab",
          "message": "Support just-in-time (JIT) compilation in system simulation ",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/330a5748c6abad1d022800bcd4e7554e1d52c5ab"
        },
        "date": 1734506426495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 979.976,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "73b1ba585114b4175d4d65aa6c07396103ebb11f",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/73b1ba585114b4175d4d65aa6c07396103ebb11f"
        },
        "date": 1734523321042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 979.275,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "09fc94535f5b62231ffce1041a447744a1572b8e",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/09fc94535f5b62231ffce1041a447744a1572b8e"
        },
        "date": 1734523444392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.239,
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
          "id": "bab4b8e92e7afeff1300fff43fceb792884464a5",
          "message": "Add bitmanip extension support",
          "timestamp": "2024-10-28T01:32:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/525/commits/bab4b8e92e7afeff1300fff43fceb792884464a5"
        },
        "date": 1734883943091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1309,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 953.749,
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
          "id": "e7ded18da549393a3e2c96550ac4fadf51bd06ab",
          "message": "Add bitmanip extension support",
          "timestamp": "2024-10-28T01:32:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/525/commits/e7ded18da549393a3e2c96550ac4fadf51bd06ab"
        },
        "date": 1734930022430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 977.65,
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
          "id": "73dea0c5e3a9473b523b0e5536c061d6b3521d19",
          "message": "Add bitmanip extension support",
          "timestamp": "2024-10-28T01:32:30Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/525/commits/73dea0c5e3a9473b523b0e5536c061d6b3521d19"
        },
        "date": 1734961193376,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.043,
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
          "id": "93091f5fd180a6ff21c16f7a5181deb99cd9680f",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/93091f5fd180a6ff21c16f7a5181deb99cd9680f"
        },
        "date": 1735248137491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1320,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.097,
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
          "id": "b952f4bea4f572bdb329e2d497b0596d25802edd",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/b952f4bea4f572bdb329e2d497b0596d25802edd"
        },
        "date": 1735248641694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1338,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.671,
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
          "id": "6a5733b995ec3a5ab604062b18e9f889001736f8",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/6a5733b995ec3a5ab604062b18e9f889001736f8"
        },
        "date": 1735270906152,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1312,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.405,
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
          "id": "b4c467f08ed8467405722c523da243d728448295",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/b4c467f08ed8467405722c523da243d728448295"
        },
        "date": 1735271183240,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1304,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.349,
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
          "id": "27a2c7ea43a0c28265868af90515db4572cbb23b",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/27a2c7ea43a0c28265868af90515db4572cbb23b"
        },
        "date": 1735272219285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 960.053,
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
          "id": "c9510cea3f876a8e9133ae37c28eb3406e67a2f6",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/c9510cea3f876a8e9133ae37c28eb3406e67a2f6"
        },
        "date": 1735272451633,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1296,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.107,
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
          "id": "6542e92f0a5c2d743f957d6faf07004171822679",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/6542e92f0a5c2d743f957d6faf07004171822679"
        },
        "date": 1735273028606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.051,
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
          "id": "d16ce4d5bafb288765501e47566ac4afdd34515d",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/d16ce4d5bafb288765501e47566ac4afdd34515d"
        },
        "date": 1735280847028,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1339,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.187,
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
          "id": "dfbed8e0f86ab81f9c52010d1edafe98faff5c1c",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/dfbed8e0f86ab81f9c52010d1edafe98faff5c1c"
        },
        "date": 1735281285442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1325,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.266,
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
          "id": "e10dd4ca3c15d51b7129d8fafb833c602dc076aa",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/e10dd4ca3c15d51b7129d8fafb833c602dc076aa"
        },
        "date": 1735281933585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.689,
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
          "id": "5e07634e644a594cc3b298366011b937d510920c",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/5e07634e644a594cc3b298366011b937d510920c"
        },
        "date": 1735282098901,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1338,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 959.31,
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
          "id": "158597a1ad1266a073877db9e47ab6a70a859aad",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/158597a1ad1266a073877db9e47ab6a70a859aad"
        },
        "date": 1735283121392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 973.118,
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
          "id": "ecb20c82197edf5429109a3f906d735b2ba687db",
          "message": "Use instruction-based emulation for debug mode",
          "timestamp": "2024-12-27T06:02:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/530/commits/ecb20c82197edf5429109a3f906d735b2ba687db"
        },
        "date": 1735366201429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1346,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 950.448,
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
          "id": "0ca9dee2cb8f8e4b7b2602f51f0be34f0304028a",
          "message": "Fix crash on system without mmap()",
          "timestamp": "2024-12-28T07:42:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/531/commits/0ca9dee2cb8f8e4b7b2602f51f0be34f0304028a"
        },
        "date": 1735372489175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1322,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.695,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "9046b6d44bc3a9a8b9abe7a9757bf4fd92367dff",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/9046b6d44bc3a9a8b9abe7a9757bf4fd92367dff"
        },
        "date": 1735402883342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.922,
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
          "id": "ee5d6558ac0d43e0a4f158b15a35d83f80447b44",
          "message": "Fix crash on system without mmap()",
          "timestamp": "2024-12-28T07:42:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/531/commits/ee5d6558ac0d43e0a4f158b15a35d83f80447b44"
        },
        "date": 1735480133118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.053,
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
          "id": "38c814f9094ac351545c7f64fa763ceb8406763d",
          "message": "Handle signals properly",
          "timestamp": "2024-12-25T20:03:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/38c814f9094ac351545c7f64fa763ceb8406763d"
        },
        "date": 1735484082021,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1325,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.815,
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
          "id": "8ee73048b0057b1e86547d61cc8f2b92b494e649",
          "message": "Handle signals properly",
          "timestamp": "2024-12-29T15:08:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/8ee73048b0057b1e86547d61cc8f2b92b494e649"
        },
        "date": 1735485338118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1346,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 961.255,
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
          "id": "f5609553d5e7ace85f95e3fd89853f7a98e4c084",
          "message": "Fix declaration error when using clang",
          "timestamp": "2024-12-29T15:08:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/532/commits/f5609553d5e7ace85f95e3fd89853f7a98e4c084"
        },
        "date": 1735487359650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1284,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 976.216,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "355c6e1964e33bff85581936da3015f2f087849f",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/355c6e1964e33bff85581936da3015f2f087849f"
        },
        "date": 1735515468475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1339,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 943.888,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "2e8cf993644f71f425a89ddbde69c2036f82940f",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/2e8cf993644f71f425a89ddbde69c2036f82940f"
        },
        "date": 1735516120826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1308,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 944.765,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "68798db2b584eeb0a06041d2339e8372891f09f9",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/68798db2b584eeb0a06041d2339e8372891f09f9"
        },
        "date": 1735522455302,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.604,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "1f4ad39bc6a3c00953259eba8a94cec6985b8ecc",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/1f4ad39bc6a3c00953259eba8a94cec6985b8ecc"
        },
        "date": 1735522616718,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.39,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "584625f09fcd744eacbc25111f9ddb54e8207c4f",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/584625f09fcd744eacbc25111f9ddb54e8207c4f"
        },
        "date": 1735523209564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1336,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 957.189,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "committer": {
            "name": "howjmay",
            "username": "howjmay"
          },
          "id": "7554c3b3812ec6bbe380ae07da92cd862d391883",
          "message": "Add decoder for RVV instructions",
          "timestamp": "2024-02-11T09:22:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/501/commits/7554c3b3812ec6bbe380ae07da92cd862d391883"
        },
        "date": 1735524299888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1336,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 948.638,
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
          "id": "cb5eb1068f7121e0426a74d2ed03e25e89980045",
          "message": "Handle signals properly",
          "timestamp": "2024-12-30T02:07:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/cb5eb1068f7121e0426a74d2ed03e25e89980045"
        },
        "date": 1735525041850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1328,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.938,
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
          "id": "f554a005f401de86ae7de59339bdc20d63a234de",
          "message": "Avoid to wrongly allocate memory in map_file()",
          "timestamp": "2024-12-29T13:41:49Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/531/commits/f554a005f401de86ae7de59339bdc20d63a234de"
        },
        "date": 1735534144623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1287,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.761,
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
          "id": "8e08387ea0ad78cdb944609493f3d2cab582931e",
          "message": "Handle signals properly",
          "timestamp": "2024-12-30T02:07:40Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/529/commits/8e08387ea0ad78cdb944609493f3d2cab582931e"
        },
        "date": 1735546219922,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.171,
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
          "id": "32edd65b1b95378513dafa8184f6857c5c04719d",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2024-12-30T04:42:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/32edd65b1b95378513dafa8184f6857c5c04719d"
        },
        "date": 1736097194575,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1175,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 954.7,
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
          "id": "2b50e1ae4bd553475bce147b6671b3800de63105",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2024-12-30T04:42:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/2b50e1ae4bd553475bce147b6671b3800de63105"
        },
        "date": 1736097474169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1310,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.162,
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
          "id": "9df29e0f574cdd115f06769b3d8d83f751713581",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:44:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/9df29e0f574cdd115f06769b3d8d83f751713581"
        },
        "date": 1736099482811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.262,
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
          "id": "31d4a5d766ebc147f8c07acf9d2c390b07f3622b",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/31d4a5d766ebc147f8c07acf9d2c390b07f3622b"
        },
        "date": 1736166596655,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.511,
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
          "id": "bb84d6b5eb6df3f19db72792c50224429c6c7814",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/bb84d6b5eb6df3f19db72792c50224429c6c7814"
        },
        "date": 1736166770607,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.35,
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
          "id": "ee756dc3c5cb1acd3619871da703c925be423c05",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/ee756dc3c5cb1acd3619871da703c925be423c05"
        },
        "date": 1736168382972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 959.909,
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
          "id": "0be479255819c6d09449411181bd7999a25f0f4e",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/0be479255819c6d09449411181bd7999a25f0f4e"
        },
        "date": 1736169177312,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.857,
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
          "id": "c15ee4cf3d526202e53c7a4bf98ec511edd402fb",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/c15ee4cf3d526202e53c7a4bf98ec511edd402fb"
        },
        "date": 1736182172297,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.001,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "08146d93d1bd6fbd9d8bde28b39a500a05045710",
          "message": "Fix Build Issues and Enhance Build System Tests",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/08146d93d1bd6fbd9d8bde28b39a500a05045710"
        },
        "date": 1736183137262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1264,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.155,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "8af47263d7421164fd79c21574171deddaeb15a9",
          "message": "Fix Build Issues and Enhance Build System Tests",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/8af47263d7421164fd79c21574171deddaeb15a9"
        },
        "date": 1736236218588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1305,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.758,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "c314bec5ca6482feb660e387d8b5867d9ee90649",
          "message": "Fix Build Issues and Enhance Build System Tests",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/c314bec5ca6482feb660e387d8b5867d9ee90649"
        },
        "date": 1736236436955,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.299,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "ba5521cbeaaec113c45219eebeb7bb602a688346",
          "message": "Fix Build Issues and Enhance Build System Tests",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/ba5521cbeaaec113c45219eebeb7bb602a688346"
        },
        "date": 1736236622962,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1346,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.43,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "08146d93d1bd6fbd9d8bde28b39a500a05045710",
          "message": "Fix Build Issues and Enhance Build System Tests",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/08146d93d1bd6fbd9d8bde28b39a500a05045710"
        },
        "date": 1736236853402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 942.861,
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
          "id": "4c73b1aefe58c3dc5cb2330d9990573da94b2d06",
          "message": "Customize bootargs for system emulation ",
          "timestamp": "2025-01-05T17:45:07Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/534/commits/4c73b1aefe58c3dc5cb2330d9990573da94b2d06"
        },
        "date": 1736253860374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1336,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 942.606,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "89a735698bda38b6ce7b5f42cbffbde488f5c088",
          "message": "Fix build failures and expand test coverage",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/89a735698bda38b6ce7b5f42cbffbde488f5c088"
        },
        "date": 1736775119026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.748,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "d30291906612dfa295c138a42baf234dd9ef78e4",
          "message": "Fix build failures and expand test coverage",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/d30291906612dfa295c138a42baf234dd9ef78e4"
        },
        "date": 1736957334551,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1340,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.845,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "3f37f514e33891e2d35bc614fb8d33035f2a4e24",
          "message": "Fix build failures and expand test coverage",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/3f37f514e33891e2d35bc614fb8d33035f2a4e24"
        },
        "date": 1737039978608,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 956.978,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "99c52b9f4e89afb58a185ac9309a96cfee3ac17f",
          "message": "Fix build failures and expand test coverage",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/535/commits/99c52b9f4e89afb58a185ac9309a96cfee3ac17f"
        },
        "date": 1737040400159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 954.362,
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
          "id": "52216b4b4ff840d9c682fc9a376b5ffc8fb77eeb",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-17T03:21:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/52216b4b4ff840d9c682fc9a376b5ffc8fb77eeb"
        },
        "date": 1737226566972,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1339,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.322,
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
          "id": "3013e951aeb0ad8c271cbe6aa3bb26dc27207a60",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-17T03:21:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/3013e951aeb0ad8c271cbe6aa3bb26dc27207a60"
        },
        "date": 1737233907950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.1,
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
          "id": "7425cb667bef4b2392e8cbc34c4628028e0928ec",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-17T03:21:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/7425cb667bef4b2392e8cbc34c4628028e0928ec"
        },
        "date": 1737263528091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1307,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 934.518,
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
          "id": "1775e2d5ce4e946b0b96a0bb06d46d090a3f0da5",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-17T03:21:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/1775e2d5ce4e946b0b96a0bb06d46d090a3f0da5"
        },
        "date": 1737269788768,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1341,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.912,
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
          "id": "81472f21e63f77226373da751b42e1a1dd3bf56a",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-19T07:58:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/81472f21e63f77226373da751b42e1a1dd3bf56a"
        },
        "date": 1737273960002,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1325,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.966,
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
          "id": "926caf3dd9a6adbe854190b9ad39e7eea42e9358",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-19T07:58:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/926caf3dd9a6adbe854190b9ad39e7eea42e9358"
        },
        "date": 1737282844640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.418,
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
          "id": "19c34952ccb9908c3e4df5f4f40223252ed1288c",
          "message": "Refine hard-coded memory layout for system emulation",
          "timestamp": "2025-01-19T07:58:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/537/commits/19c34952ccb9908c3e4df5f4f40223252ed1288c"
        },
        "date": 1737284264208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.56,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "b6bd4b267d063d0eea390d4523a046cccdc4f4f7",
          "message": "Migrate virtio-blk from semu",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/b6bd4b267d063d0eea390d4523a046cccdc4f4f7"
        },
        "date": 1737610169677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.334,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "9a4ed2b1c28e6629603550255df9879e0ba7fbef",
          "message": "Migrate virtio-blk from semu",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/9a4ed2b1c28e6629603550255df9879e0ba7fbef"
        },
        "date": 1737612184328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1338,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.207,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "202fbd95fd96bc19b535f834ad7513e8c15a2341",
          "message": "Migrate virtio-blk from semu",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/202fbd95fd96bc19b535f834ad7513e8c15a2341"
        },
        "date": 1737615067791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 959.928,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "55c592f0f67c1800d6ea831995f2a9b9f5f5568b",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/55c592f0f67c1800d6ea831995f2a9b9f5f5568b"
        },
        "date": 1737641190434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1295,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.763,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "3f32599d60b2840194d3ad0889e2889d513acbe2",
          "message": "Add support for the RV32E base ISA variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/3f32599d60b2840194d3ad0889e2889d513acbe2"
        },
        "date": 1737643888897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.475,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "b4ab953ecd4dde8b45c91a4541db8b5051771e90",
          "message": "Add support for the RV32E base ISA variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/b4ab953ecd4dde8b45c91a4541db8b5051771e90"
        },
        "date": 1737644483014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1236,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.679,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "771fd0c75a9011420cd8251b9ca915841da353d0",
          "message": "Add support for the RV32E base ISA variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/771fd0c75a9011420cd8251b9ca915841da353d0"
        },
        "date": 1737644940759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.899,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "e83fefe03a42ca188566545b882513d1b3fa4158",
          "message": "Add support for the RV32E base ISA variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/e83fefe03a42ca188566545b882513d1b3fa4158"
        },
        "date": 1737646259936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1319,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.178,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "67ee41c47073348d456c90ba9a4d49816597f292",
          "message": "Add support for the RV32E base ISA variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/67ee41c47073348d456c90ba9a4d49816597f292"
        },
        "date": 1737647341584,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.528,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "ae594860b36462f5efe66ea895645a5b890fe303",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/ae594860b36462f5efe66ea895645a5b890fe303"
        },
        "date": 1737648222137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.412,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "cb15ab4a7db433da8e044aca9db5e996a4aa9fb8",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/cb15ab4a7db433da8e044aca9db5e996a4aa9fb8"
        },
        "date": 1737648494739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1341,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.711,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "f513ee7a95131ae53b714c44e1384f2adf21ebf5",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/f513ee7a95131ae53b714c44e1384f2adf21ebf5"
        },
        "date": 1737649821779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.204,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "382ccf73cff8283967d409bb71757ade27745630",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/382ccf73cff8283967d409bb71757ade27745630"
        },
        "date": 1737651637269,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.565,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "83556975b2865272ea5b34949fb50c8a5fa0adb5",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/83556975b2865272ea5b34949fb50c8a5fa0adb5"
        },
        "date": 1737692949993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 973.056,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "40bca99c70982ea00e6533d07d7198f62110c3b5",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/40bca99c70982ea00e6533d07d7198f62110c3b5"
        },
        "date": 1737694024267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 957.859,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "48536bf0e262a9e587f7e2157b8564001c191dde",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/48536bf0e262a9e587f7e2157b8564001c191dde"
        },
        "date": 1737697782217,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.937,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "f475a4527533ad1a060a22436998b22f5ee9722d",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/f475a4527533ad1a060a22436998b22f5ee9722d"
        },
        "date": 1737698462853,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.869,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "44c3121dfd9cbd7ed8a60443f217eecebaef3f1c",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/44c3121dfd9cbd7ed8a60443f217eecebaef3f1c"
        },
        "date": 1737699091023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1344,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.557,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "ca974f200245cc59fbfe46d861d70677023164df",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/ca974f200245cc59fbfe46d861d70677023164df"
        },
        "date": 1737699793779,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.092,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "fda76070ac495c8e92316ccf5f76d8a441ce6e4a",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/fda76070ac495c8e92316ccf5f76d8a441ce6e4a"
        },
        "date": 1737714655068,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1312,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.728,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "a871e8c8d965e191cec8c2970f1a2887f8bd3aa0",
          "message": "Add RVV extension support",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/a871e8c8d965e191cec8c2970f1a2887f8bd3aa0"
        },
        "date": 1737730861914,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1340,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.3,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "6268927f3dd7a109a426d091d0084be35abfbeeb",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/6268927f3dd7a109a426d091d0084be35abfbeeb"
        },
        "date": 1737765747849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.865,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "5321fc4fdd68fef3db71b0459471fa735646eb1c",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/5321fc4fdd68fef3db71b0459471fa735646eb1c"
        },
        "date": 1737769335682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1328,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.744,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "bd07233962f0080284878adcead834764c6e440d",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/bd07233962f0080284878adcead834764c6e440d"
        },
        "date": 1737798133096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.199,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "d46348ccb75ba9d8905a37b0a06ddd351eb36a89",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-20T07:46:47Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/d46348ccb75ba9d8905a37b0a06ddd351eb36a89"
        },
        "date": 1737812844158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.702,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "15a105c7be1206903b9308e4716ef3cd5e3a7e01",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-25T13:47:11Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/15a105c7be1206903b9308e4716ef3cd5e3a7e01"
        },
        "date": 1737813954016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1328,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.154,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "613cd0a2fafa709f9d1626fab5bf9dc4f72446f7",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/613cd0a2fafa709f9d1626fab5bf9dc4f72446f7"
        },
        "date": 1737823324892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1346,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.884,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "b2d8304394a8848b0b672e9c238c32d9056aa5e7",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-25T13:47:11Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/b2d8304394a8848b0b672e9c238c32d9056aa5e7"
        },
        "date": 1737858754203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.709,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "754062e14e915da984941908e1bc57308fa19a03",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/754062e14e915da984941908e1bc57308fa19a03"
        },
        "date": 1737872472271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 956.191,
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
          "id": "3bae92dfc2f20012b9b3c8c4a2bfdf85386bd8b8",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-26T16:07:45+08:00",
          "tree_id": "cd2c4ce9218b68fabc9c8faa4ec7a9c1a11e8ae2",
          "url": "https://github.com/sysprog21/rv32emu/commit/3bae92dfc2f20012b9b3c8c4a2bfdf85386bd8b8"
        },
        "date": 1737879293527,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.381,
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
          "id": "3bae92dfc2f20012b9b3c8c4a2bfdf85386bd8b8",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/3bae92dfc2f20012b9b3c8c4a2bfdf85386bd8b8"
        },
        "date": 1737879298116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1320,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.403,
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
          "id": "7eca0832abe0891aaee0ac019e85c3919917ee7d",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-26T22:53:46+08:00",
          "tree_id": "9ca48dad75c5519d516aaa43f4f65c3efc8386f2",
          "url": "https://github.com/sysprog21/rv32emu/commit/7eca0832abe0891aaee0ac019e85c3919917ee7d"
        },
        "date": 1737903642270,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.545,
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
          "id": "7eca0832abe0891aaee0ac019e85c3919917ee7d",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/7eca0832abe0891aaee0ac019e85c3919917ee7d"
        },
        "date": 1737903643362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 961.276,
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
          "id": "35604a22e59dfab4c02adee25cde2a3db5f20e79",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/35604a22e59dfab4c02adee25cde2a3db5f20e79"
        },
        "date": 1737907678313,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1319,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.861,
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
          "id": "35604a22e59dfab4c02adee25cde2a3db5f20e79",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-27T00:01:02+08:00",
          "tree_id": "8867e82859194615220e6a809bd2dabf0e4834a4",
          "url": "https://github.com/sysprog21/rv32emu/commit/35604a22e59dfab4c02adee25cde2a3db5f20e79"
        },
        "date": 1737907682862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.167,
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
          "id": "b7d6f9c4429aa84d5188ab06212cec16095154e9",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-27T00:37:00+08:00",
          "tree_id": "9d43f2e1774470262f8c8c7105f9acebf6e647a6",
          "url": "https://github.com/sysprog21/rv32emu/commit/b7d6f9c4429aa84d5188ab06212cec16095154e9"
        },
        "date": 1737909840303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.063,
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
          "id": "b7d6f9c4429aa84d5188ab06212cec16095154e9",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/b7d6f9c4429aa84d5188ab06212cec16095154e9"
        },
        "date": 1737909873289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1130,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.898,
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
          "id": "45ac5f09031dd6c1e14c41c13d46a1a53059f4c4",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-27T00:59:37+08:00",
          "tree_id": "7a2f2b03f4bc9e986dd5c1c1996a541cbf2d808b",
          "url": "https://github.com/sysprog21/rv32emu/commit/45ac5f09031dd6c1e14c41c13d46a1a53059f4c4"
        },
        "date": 1737911184350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.155,
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
          "id": "45ac5f09031dd6c1e14c41c13d46a1a53059f4c4",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/45ac5f09031dd6c1e14c41c13d46a1a53059f4c4"
        },
        "date": 1737911194230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1339,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.236,
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
          "id": "d1fe7494b4d03c5282b34e8dd1d83165b879262e",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-27T01:21:30+08:00",
          "tree_id": "c8db3855d25aa985fd5b10981a4837ec148e109f",
          "url": "https://github.com/sysprog21/rv32emu/commit/d1fe7494b4d03c5282b34e8dd1d83165b879262e"
        },
        "date": 1737912496795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.976,
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
          "id": "d1fe7494b4d03c5282b34e8dd1d83165b879262e",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/d1fe7494b4d03c5282b34e8dd1d83165b879262e"
        },
        "date": 1737912521062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1240,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.511,
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
          "id": "71a327784133bc40d99fef44b26b549a5626f45d",
          "message": "Change for CI pipeline",
          "timestamp": "2025-01-27T15:54:21+08:00",
          "tree_id": "9bcfa7dbc8f2c009a25a019acf92b116d0abddd9",
          "url": "https://github.com/sysprog21/rv32emu/commit/71a327784133bc40d99fef44b26b549a5626f45d"
        },
        "date": 1737964877503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.562,
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
          "id": "71a327784133bc40d99fef44b26b549a5626f45d",
          "message": "CI: Use newer Aarch64/Linux host",
          "timestamp": "2025-01-24T14:05:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/548/commits/71a327784133bc40d99fef44b26b549a5626f45d"
        },
        "date": 1737964884642,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.432,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "ff7fddd8b2d977780d5d8abcff9e5a03599d8190",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/ff7fddd8b2d977780d5d8abcff9e5a03599d8190"
        },
        "date": 1737983000993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.08,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "d6914ee05d95b66c5b1063b2f59303f8061019fe",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/d6914ee05d95b66c5b1063b2f59303f8061019fe"
        },
        "date": 1737991092290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 960.785,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "d29f2292793bd150027689b436edae61ab09a0f4",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/d29f2292793bd150027689b436edae61ab09a0f4"
        },
        "date": 1737991307770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1325,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.643,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "64ea138c99ecfa1a91a4a26e23226867ac857cb5",
          "message": "Add support for the RV32E variant",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/541/commits/64ea138c99ecfa1a91a4a26e23226867ac857cb5"
        },
        "date": 1737991912595,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.943,
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
          "id": "1a2bcc9cd1b1c18c5d9b7d46a74fba63b075cf0a",
          "message": "CI: Build check with various optimization levels",
          "timestamp": "2025-01-27T16:45:59Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/546/commits/1a2bcc9cd1b1c18c5d9b7d46a74fba63b075cf0a"
        },
        "date": 1738000693015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.001,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "3abc5573dc95bf3acb3857ab868638379821f11b",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-25T13:47:11Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/3abc5573dc95bf3acb3857ab868638379821f11b"
        },
        "date": 1738056079938,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1297,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.822,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "8583029c4b270e5601884e21f4bf1cd6c86e61ae",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/8583029c4b270e5601884e21f4bf1cd6c86e61ae"
        },
        "date": 1738075060112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.216,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "bce4c8537cac998ad6372712551bdc0210a71052",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/bce4c8537cac998ad6372712551bdc0210a71052"
        },
        "date": 1738087255463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1138,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.004,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "268988fbcf4190d97ad339175df3ae2e4bdcb09f",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/268988fbcf4190d97ad339175df3ae2e4bdcb09f"
        },
        "date": 1738255120426,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1195,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.349,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "57709320605b4ac98e63fee8a8de6977850cc9a0",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/57709320605b4ac98e63fee8a8de6977850cc9a0"
        },
        "date": 1738330231220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.179,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "d0ecf7297ab41791f4335f1a577b702e876b6634",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/d0ecf7297ab41791f4335f1a577b702e876b6634"
        },
        "date": 1738330351795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.215,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "803d241911b6fedbfbc9fbc984284be7a00b11a1",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-01-28T14:13:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/803d241911b6fedbfbc9fbc984284be7a00b11a1"
        },
        "date": 1738335826413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 955.384,
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
          "id": "3b4b3b4670feb60f20adf81bedf67c2e54903cdf",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/3b4b3b4670feb60f20adf81bedf67c2e54903cdf"
        },
        "date": 1738366675016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.266,
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
          "id": "35c925668837e118b439d58ca5ddeb3638764ed1",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/35c925668837e118b439d58ca5ddeb3638764ed1"
        },
        "date": 1738366950131,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.978,
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
          "id": "a886bfab38cc6bc80d1dbf5d188bd1d901802db7",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/a886bfab38cc6bc80d1dbf5d188bd1d901802db7"
        },
        "date": 1738367391854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1319,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 947.45,
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
          "id": "387e715889bdc271ed1a0a4706fb861abaf80716",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/387e715889bdc271ed1a0a4706fb861abaf80716"
        },
        "date": 1738384567666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 965.53,
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
          "id": "a862132bdaa0e8505acbb609cc7086097cf649ab",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/a862132bdaa0e8505acbb609cc7086097cf649ab"
        },
        "date": 1738386015324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.953,
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
          "id": "515e0115166e20824bcb7d868af0d0e934511bca",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/515e0115166e20824bcb7d868af0d0e934511bca"
        },
        "date": 1738403908288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1306,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 963.25,
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
          "id": "f20b95901808f68158cf65638a8836890c33f0b4",
          "message": "Trap guestOS to run SDL-oriented applications",
          "timestamp": "2025-01-30T18:35:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/551/commits/f20b95901808f68158cf65638a8836890c33f0b4"
        },
        "date": 1738405912398,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 961.974,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "caef4ad8f25bf2162a8f2fb6475d081f1608083d",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-02-01T15:16:32Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/caef4ad8f25bf2162a8f2fb6475d081f1608083d"
        },
        "date": 1738423429992,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1336,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.943,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "committer": {
            "name": "otteryc",
            "username": "otteryc"
          },
          "id": "fd051c24c9c7143cb43fed6de603139aa116326e",
          "message": "Implement VirtIO block device",
          "timestamp": "2025-02-01T15:38:35Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/539/commits/fd051c24c9c7143cb43fed6de603139aa116326e"
        },
        "date": 1738424862330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 959.33,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "caa38846553b93886afd598482f08f282584c7e8",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/caa38846553b93886afd598482f08f282584c7e8"
        },
        "date": 1738577908822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.958,
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
          "id": "d8912c42e0260cbc9c31bc9a67170dcba82903be",
          "message": "Feat/logging api",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/d8912c42e0260cbc9c31bc9a67170dcba82903be"
        },
        "date": 1738596987366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1291,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.038,
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
          "id": "517c23d1e825a156275b7a447d79b55a710684cd",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/517c23d1e825a156275b7a447d79b55a710684cd"
        },
        "date": 1738599467226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.019,
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
          "id": "da1fa29f2fc5fd90885830e396c6774bbf362761",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/da1fa29f2fc5fd90885830e396c6774bbf362761"
        },
        "date": 1738600684514,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1273,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.039,
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
          "id": "3c36054a5c297c5ff0e8cdddaa682e41e085db34",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/3c36054a5c297c5ff0e8cdddaa682e41e085db34"
        },
        "date": 1738601845732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.158,
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
          "id": "10ca95d975d999d5611c459954f0534731c36d90",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/10ca95d975d999d5611c459954f0534731c36d90"
        },
        "date": 1738602041614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 953.16,
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
          "id": "5ff4fd0bf9052ba71b424df09b39e15536de15e0",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/5ff4fd0bf9052ba71b424df09b39e15536de15e0"
        },
        "date": 1738603057319,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.663,
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
          "id": "e759f8edb2191b001df1c447ee975a475fe231bb",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/e759f8edb2191b001df1c447ee975a475fe231bb"
        },
        "date": 1738603567322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1260,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 960.508,
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
          "id": "fee21cac71d694d14ecbd2a57ad02675d7eb352a",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/fee21cac71d694d14ecbd2a57ad02675d7eb352a"
        },
        "date": 1738648720612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.909,
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
          "id": "45839c7c1416e94d145ffc0a9995a6c21a2fac4a",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/45839c7c1416e94d145ffc0a9995a6c21a2fac4a"
        },
        "date": 1738648797866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.842,
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
          "id": "9e07773593d8de2472f0af4d249e0cd21a3b4788",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/9e07773593d8de2472f0af4d249e0cd21a3b4788"
        },
        "date": 1738649182158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.043,
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
          "id": "85701c40e26bcfd033bd8fb3e3b511ba317f19fc",
          "message": "Standardize logging utility",
          "timestamp": "2025-02-03T15:18:15Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/552/commits/85701c40e26bcfd033bd8fb3e3b511ba317f19fc"
        },
        "date": 1738651857927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1307,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.939,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "5a6961e62a18dc3a5ae0c7ee1d1531f100fdbf90",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/5a6961e62a18dc3a5ae0c7ee1d1531f100fdbf90"
        },
        "date": 1738652921142,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 961.042,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "fd1faa4bf0c15bf6194f0432dbd8cf37ee30d23f",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/fd1faa4bf0c15bf6194f0432dbd8cf37ee30d23f"
        },
        "date": 1738690489667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1236,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.213,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "0b884ef05ba5c0f8b5e82b2bfe2435cbceacef74",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/0b884ef05ba5c0f8b5e82b2bfe2435cbceacef74"
        },
        "date": 1738738169837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.654,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "a669e4077ed69d84eef303cb4b67959a15b7d26b",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/a669e4077ed69d84eef303cb4b67959a15b7d26b"
        },
        "date": 1738739396440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.353,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "13b0de413b5e7fd278aefa4afd3dd41710bbad87",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/13b0de413b5e7fd278aefa4afd3dd41710bbad87"
        },
        "date": 1738765973062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 948.583,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "9f130828a7e8761675ecdad926470c441f9866b1",
          "message": "jit: Add architecture test",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/547/commits/9f130828a7e8761675ecdad926470c441f9866b1"
        },
        "date": 1738770129400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 940.264,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "1627a4be248671d8c8b96f1c6fd6a7ac7974b4d5",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/1627a4be248671d8c8b96f1c6fd6a7ac7974b4d5"
        },
        "date": 1738784808362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1333,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 952.577,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "4da70578991cb033f7c68f70d75ee0831d143f5e",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/4da70578991cb033f7c68f70d75ee0831d143f5e"
        },
        "date": 1738865390990,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1340,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 949.671,
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
          "id": "a78b90bc53f11ea9b98af3bb5e546a082bd29269",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-05T20:10:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/a78b90bc53f11ea9b98af3bb5e546a082bd29269"
        },
        "date": 1738953679503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.956,
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
          "id": "2b375ea52c31a8e206990d29ac80ebc0d5e6699a",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-05T20:10:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/2b375ea52c31a8e206990d29ac80ebc0d5e6699a"
        },
        "date": 1738954279910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1235,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 935.501,
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
          "id": "d3275ebe85d42071cd2d064c2ddc8755b6bddffc",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-05T20:10:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/d3275ebe85d42071cd2d064c2ddc8755b6bddffc"
        },
        "date": 1738954591549,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.525,
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
          "id": "8bcf0841d9707c13833720ec54712d8784600235",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-05T20:10:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/8bcf0841d9707c13833720ec54712d8784600235"
        },
        "date": 1738955075733,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 948.979,
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
          "id": "b41f6fa7cacb837d16968a90817683a57f2dc425",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-05T20:10:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/b41f6fa7cacb837d16968a90817683a57f2dc425"
        },
        "date": 1738955528339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.94,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "cf39d8ff2dc2de4adddca5a61db36353d146af00",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/cf39d8ff2dc2de4adddca5a61db36353d146af00"
        },
        "date": 1739087647999,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 944.881,
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
          "id": "ef87f7fbf5ad404796d0153bb24db9e63dba6fa5",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-09T17:42:18+08:00",
          "tree_id": "ee2b38ed2e11961240d653bc88f0699d100cf802",
          "url": "https://github.com/sysprog21/rv32emu/commit/ef87f7fbf5ad404796d0153bb24db9e63dba6fa5"
        },
        "date": 1739094574405,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 956.249,
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
          "id": "ef87f7fbf5ad404796d0153bb24db9e63dba6fa5",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-08T13:49:28Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/ef87f7fbf5ad404796d0153bb24db9e63dba6fa5"
        },
        "date": 1739094575752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1347,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.885,
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
          "id": "a31b62fa5301dbdc16f8289eb8e5f797f781dd4a",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-09T18:03:10+08:00",
          "tree_id": "c3b6e7af3fa2c9a32f6d6aae47590be8bb67151e",
          "url": "https://github.com/sysprog21/rv32emu/commit/a31b62fa5301dbdc16f8289eb8e5f797f781dd4a"
        },
        "date": 1739095801268,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1314,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 978.782,
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
          "id": "a31b62fa5301dbdc16f8289eb8e5f797f781dd4a",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-09T09:46:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/a31b62fa5301dbdc16f8289eb8e5f797f781dd4a"
        },
        "date": 1739095801805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.044,
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
          "id": "e344fbb703ee976dc45a60f22b9cdb851bbb55d1",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-09T22:57:37+08:00",
          "tree_id": "78392cc4ea0c74f8f887ef93ab6bbe055a640740",
          "url": "https://github.com/sysprog21/rv32emu/commit/e344fbb703ee976dc45a60f22b9cdb851bbb55d1"
        },
        "date": 1739113480115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1283,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 977.635,
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
          "id": "e344fbb703ee976dc45a60f22b9cdb851bbb55d1",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-09T12:41:43Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/e344fbb703ee976dc45a60f22b9cdb851bbb55d1"
        },
        "date": 1739113486088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1321,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.175,
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
          "id": "df51133e47444047e0fb62be14aebe639a82bc68",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-09T23:13:26+08:00",
          "tree_id": "99003b1f6063c8a1c0d5b4131ed38ad54c10a419",
          "url": "https://github.com/sysprog21/rv32emu/commit/df51133e47444047e0fb62be14aebe639a82bc68"
        },
        "date": 1739114432071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1296,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 979.617,
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
          "id": "df51133e47444047e0fb62be14aebe639a82bc68",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-09T15:12:37Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/df51133e47444047e0fb62be14aebe639a82bc68"
        },
        "date": 1739114461518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1171,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 940.535,
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
          "id": "b7cee67b9d37b9d1ad2e943a4a2ba3b89f0b6d10",
          "message": "Suppress logging outputs to honor -q option",
          "timestamp": "2025-02-09T20:52:55Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/562/commits/b7cee67b9d37b9d1ad2e943a4a2ba3b89f0b6d10"
        },
        "date": 1739162520272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1342,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 938.555,
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
          "id": "3a68696bbc221cf80514d296283326a90c96dbce",
          "message": "Suppress logging outputs to honor -q option",
          "timestamp": "2025-02-09T20:52:55Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/562/commits/3a68696bbc221cf80514d296283326a90c96dbce"
        },
        "date": 1739162863115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1345,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 944.63,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "b982d62a4c77ee44476f2f47de9aabbbf18ba27a",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/b982d62a4c77ee44476f2f47de9aabbbf18ba27a"
        },
        "date": 1739183281301,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1339,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 927.99,
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
          "id": "391fe0926327de3af4b79fe2231aca001eb52253",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T08:49:10Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/391fe0926327de3af4b79fe2231aca001eb52253"
        },
        "date": 1739264584610,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 935.793,
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
          "id": "391fe0926327de3af4b79fe2231aca001eb52253",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T16:55:55+08:00",
          "tree_id": "60efe7ea394124a20280338bffc2bc4a912836e4",
          "url": "https://github.com/sysprog21/rv32emu/commit/391fe0926327de3af4b79fe2231aca001eb52253"
        },
        "date": 1739264623714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1079,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 978.921,
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
          "id": "1b4168ad6f05ab5d958fcce602597503d7b1f1ac",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T16:57:38+08:00",
          "tree_id": "70200b41ed714aae456f80da2e9261e11995359e",
          "url": "https://github.com/sysprog21/rv32emu/commit/1b4168ad6f05ab5d958fcce602597503d7b1f1ac"
        },
        "date": 1739264675285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1328,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 970.77,
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
          "id": "1b4168ad6f05ab5d958fcce602597503d7b1f1ac",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T08:57:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/1b4168ad6f05ab5d958fcce602597503d7b1f1ac"
        },
        "date": 1739264703469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1345,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 947.341,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "331a44d26bdbb6f4a3fdacfcfd9552cef4bd45bb",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/331a44d26bdbb6f4a3fdacfcfd9552cef4bd45bb"
        },
        "date": 1739273364452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.046,
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
          "id": "4bf975e11f47b0b8947ab39752dcbae44ca2ec8b",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T21:16:12+08:00",
          "tree_id": "ec4194d01743c7d77b47b43181f90be0e1700b2c",
          "url": "https://github.com/sysprog21/rv32emu/commit/4bf975e11f47b0b8947ab39752dcbae44ca2ec8b"
        },
        "date": 1739280199626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1341,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 977.81,
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
          "id": "4bf975e11f47b0b8947ab39752dcbae44ca2ec8b",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T08:57:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/4bf975e11f47b0b8947ab39752dcbae44ca2ec8b"
        },
        "date": 1739280200973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1345,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.253,
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
          "id": "3753bb673e481e7ab07e9a3702810cba81ac4fda",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T22:09:19+08:00",
          "tree_id": "22449fc880d9ad56f8deaee3ee587c3564900df7",
          "url": "https://github.com/sysprog21/rv32emu/commit/3753bb673e481e7ab07e9a3702810cba81ac4fda"
        },
        "date": 1739283389651,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.001,
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
          "id": "d2b6f95220e1e31bdc97a3ed03075dd1efa05c90",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T22:48:11+08:00",
          "tree_id": "87683bad7a907b0887fd17fca74bae3d710d8feb",
          "url": "https://github.com/sysprog21/rv32emu/commit/d2b6f95220e1e31bdc97a3ed03075dd1efa05c90"
        },
        "date": 1739285716358,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1330,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.861,
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
          "id": "d2b6f95220e1e31bdc97a3ed03075dd1efa05c90",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T08:57:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/d2b6f95220e1e31bdc97a3ed03075dd1efa05c90"
        },
        "date": 1739285733038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.903,
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
          "id": "9941a43048953871a4f938a1e15276db48fc8232",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T08:57:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/9941a43048953871a4f938a1e15276db48fc8232"
        },
        "date": 1739286901176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 947.611,
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
          "id": "9941a43048953871a4f938a1e15276db48fc8232",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T23:07:55+08:00",
          "tree_id": "ca6868ab749975d1067f65bde86556ab07991526",
          "url": "https://github.com/sysprog21/rv32emu/commit/9941a43048953871a4f938a1e15276db48fc8232"
        },
        "date": 1739286902485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1336,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 980.068,
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
          "id": "cad788674836d7b0f33f5c52b12e702b2442de39",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T15:17:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/cad788674836d7b0f33f5c52b12e702b2442de39"
        },
        "date": 1739287472811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 931.224,
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
          "id": "cad788674836d7b0f33f5c52b12e702b2442de39",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T23:17:31+08:00",
          "tree_id": "ca6868ab749975d1067f65bde86556ab07991526",
          "url": "https://github.com/sysprog21/rv32emu/commit/cad788674836d7b0f33f5c52b12e702b2442de39"
        },
        "date": 1739287483798,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 967.969,
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
          "id": "a766f44b82ec1250bb1436f685749063aa3452ac",
          "message": "DO NOT MERGE",
          "timestamp": "2025-02-11T23:20:18+08:00",
          "tree_id": "2c895c86e51b302d53dcbfd8f22c83fd565a5e7d",
          "url": "https://github.com/sysprog21/rv32emu/commit/a766f44b82ec1250bb1436f685749063aa3452ac"
        },
        "date": 1739287646587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 980.838,
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
          "id": "a766f44b82ec1250bb1436f685749063aa3452ac",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T15:17:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/a766f44b82ec1250bb1436f685749063aa3452ac"
        },
        "date": 1739287651160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1320,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.348,
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
          "id": "cad788674836d7b0f33f5c52b12e702b2442de39",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T15:17:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/cad788674836d7b0f33f5c52b12e702b2442de39"
        },
        "date": 1739287741443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 944.185,
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
          "id": "cad788674836d7b0f33f5c52b12e702b2442de39",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T23:17:31+08:00",
          "tree_id": "ca6868ab749975d1067f65bde86556ab07991526",
          "url": "https://github.com/sysprog21/rv32emu/commit/cad788674836d7b0f33f5c52b12e702b2442de39"
        },
        "date": 1739287744276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1276,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.99,
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
          "id": "40a4e4ead4c567244d2839a27586551f731a23e0",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T15:17:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/40a4e4ead4c567244d2839a27586551f731a23e0"
        },
        "date": 1739287911333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 956.484,
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
          "id": "40a4e4ead4c567244d2839a27586551f731a23e0",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-11T23:24:50+08:00",
          "tree_id": "8739c43ec9f41061e42d9a0b00d0cc1a9803ca3b",
          "url": "https://github.com/sysprog21/rv32emu/commit/40a4e4ead4c567244d2839a27586551f731a23e0"
        },
        "date": 1739287919033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 966.733,
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
          "id": "51f036601b2f0be4c89f259f618d6849d36f7e5e",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-11T15:17:16Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/51f036601b2f0be4c89f259f618d6849d36f7e5e"
        },
        "date": 1739291578245,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 925.509,
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
          "id": "51f036601b2f0be4c89f259f618d6849d36f7e5e",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-12T00:25:59+08:00",
          "tree_id": "323c0c991ecb2f75c0407a2bc54b8ecfac0c84e2",
          "url": "https://github.com/sysprog21/rv32emu/commit/51f036601b2f0be4c89f259f618d6849d36f7e5e"
        },
        "date": 1739291576738,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 981.622,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "08bbf92867363ea7cbb861d80e49407bb955071d",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/08bbf92867363ea7cbb861d80e49407bb955071d"
        },
        "date": 1739293113572,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1320,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 945.917,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "1b8f4b06ec07d3a699e37882b4e23586c77678be",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/1b8f4b06ec07d3a699e37882b4e23586c77678be"
        },
        "date": 1739294454994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1337,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 939.479,
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
          "id": "edfa83e00d7015ee575922ade1f47c80f0b083b7",
          "message": "Use upstream SoftFloat and unify build system\n\nReplace custom Berkeley SoftFloat 3 package in 'src/softfloat' with the\nupstream one. It streamlines build system onfiguration for consistency.",
          "timestamp": "2025-02-12T10:11:21+08:00",
          "tree_id": "82fc6d69e02392e9b69e76fa602dd76a27c853f1",
          "url": "https://github.com/sysprog21/rv32emu/commit/edfa83e00d7015ee575922ade1f47c80f0b083b7"
        },
        "date": 1739326707112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1338,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 981.067,
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
          "id": "edfa83e00d7015ee575922ade1f47c80f0b083b7",
          "message": "Use upstream SoftFloat and unify build system",
          "timestamp": "2025-02-12T02:09:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/557/commits/edfa83e00d7015ee575922ade1f47c80f0b083b7"
        },
        "date": 1739326709225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 939.158,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "7e23801847f9264c3d90482ec8aef8d0a2a07acc",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/7e23801847f9264c3d90482ec8aef8d0a2a07acc"
        },
        "date": 1739386061071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1306,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.894,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "464c22c25456392908839d2b5bfe90f52ec03f6b",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/464c22c25456392908839d2b5bfe90f52ec03f6b"
        },
        "date": 1739468730490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1335,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 980.453,
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
          "id": "7af92d24a09dd5368a3efaf8663aeefc60efbf80",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-13T17:47:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/7af92d24a09dd5368a3efaf8663aeefc60efbf80"
        },
        "date": 1739475863390,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1343,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 974.544,
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
          "id": "7a032dbb90098acdd4e602e62d7ead60b26fdb3b",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-14T08:29:29Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/7a032dbb90098acdd4e602e62d7ead60b26fdb3b"
        },
        "date": 1739522332943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1340,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 947.06,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "4ef61b8966268a765455d5e30c5e0bdb18eca93e",
          "message": "Allow JIT compilation for system emulation",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/521/commits/4ef61b8966268a765455d5e30c5e0bdb18eca93e"
        },
        "date": 1739538649669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1284,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.508,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vestata",
            "username": "vestata"
          },
          "committer": {
            "name": "vestata",
            "username": "vestata"
          },
          "id": "c3374eaa45548cd84ec8a0903b9e99019c063640",
          "message": "Support partial vector extension instructions",
          "timestamp": "2025-01-09T13:20:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/545/commits/c3374eaa45548cd84ec8a0903b9e99019c063640"
        },
        "date": 1739845118226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1256,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.035,
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
          "id": "2d9f2f12db540ed3b7c34b83cd512be1564fb1c4",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-15T15:59:13Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/2d9f2f12db540ed3b7c34b83cd512be1564fb1c4"
        },
        "date": 1739869212370,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1264,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 972.173,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "banglday",
            "username": "banglday"
          },
          "committer": {
            "name": "banglday",
            "username": "banglday"
          },
          "id": "b2dc9b3c7bed87e39ab4b3cb930bb4e9a8bbeac8",
          "message": "Return error code -1 when closing file descriptors < 3 (stdin, stdout, stderr)",
          "timestamp": "2025-02-18T13:40:01Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/566/commits/b2dc9b3c7bed87e39ab4b3cb930bb4e9a8bbeac8"
        },
        "date": 1739886813143,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1271,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 975.127,
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
          "id": "8172b84f04b4616a0b5f8dc56257828e6154f9f6",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-18T10:46:59Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/8172b84f04b4616a0b5f8dc56257828e6154f9f6"
        },
        "date": 1739887411394,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 961.146,
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
          "id": "cd7c0e17b7cd0f883f576defc0c58cedc9a75cc9",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-18T10:46:59Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/cd7c0e17b7cd0f883f576defc0c58cedc9a75cc9"
        },
        "date": 1739887496093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1334,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.658,
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
          "id": "1482689485887b8855b73b35840dd0eb4a29c341",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-18T10:46:59Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/1482689485887b8855b73b35840dd0eb4a29c341"
        },
        "date": 1739888040281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.795,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "banglday",
            "username": "banglday"
          },
          "committer": {
            "name": "banglday",
            "username": "banglday"
          },
          "id": "fada4cc518ca516985f8022165503dde1a609f50",
          "message": "Return error code -1 when closing file descriptors < 3 (stdin, stdout, stderr)",
          "timestamp": "2025-02-18T13:46:36Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/566/commits/fada4cc518ca516985f8022165503dde1a609f50"
        },
        "date": 1739890581051,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1259,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 958.475,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "banglday",
            "username": "banglday"
          },
          "committer": {
            "name": "banglday",
            "username": "banglday"
          },
          "id": "9f821ec1cb9f3a140744404dc3af6d53ddce5ed4",
          "message": "Return error code -1 when closing file descriptors < 3 (stdin, stdout, stderr)",
          "timestamp": "2025-02-18T14:49:22Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/566/commits/9f821ec1cb9f3a140744404dc3af6d53ddce5ed4"
        },
        "date": 1739891833473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1240,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.431,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "banglday",
            "username": "banglday"
          },
          "committer": {
            "name": "banglday",
            "username": "banglday"
          },
          "id": "c475d34cfff8d360c9d6ab0ee84b6e26972c65dc",
          "message": "Return error code -1 when closing file descriptors < 3 (stdin, stdout, stderr)",
          "timestamp": "2025-02-18T15:10:11Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/566/commits/c475d34cfff8d360c9d6ab0ee84b6e26972c65dc"
        },
        "date": 1739895135190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1257,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 971.038,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "banglday",
            "username": "banglday"
          },
          "committer": {
            "name": "banglday",
            "username": "banglday"
          },
          "id": "f706e107c6945ee581a67238d6a11cd288dc8038",
          "message": "Return error code -1 when closing file descriptors < 3 (stdin, stdout, stderr)",
          "timestamp": "2025-02-18T16:05:12Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/566/commits/f706e107c6945ee581a67238d6a11cd288dc8038"
        },
        "date": 1739905416993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1203,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 962.856,
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
          "id": "717ee367567734cbeb76ef14ca8af435119fd030",
          "message": "Fix deploy-wasm CI trigger condition and miscellaneous changes",
          "timestamp": "2025-02-25T17:38:56Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/577/commits/717ee367567734cbeb76ef14ca8af435119fd030"
        },
        "date": 1740510518204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 969.057,
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
          "id": "f0536056a5b144c5584a154ed91d8ed9862f2ee5",
          "message": "Fix deploy-wasm CI trigger condition and miscellaneous changes",
          "timestamp": "2025-02-25T19:21:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/577/commits/f0536056a5b144c5584a154ed91d8ed9862f2ee5"
        },
        "date": 1740549645797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1306,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.906,
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
          "id": "c429166e964b78691721fa7af412647fba7f4590",
          "message": "Fix deploy-wasm CI trigger condition and miscellaneous changes",
          "timestamp": "2025-02-25T19:21:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/577/commits/c429166e964b78691721fa7af412647fba7f4590"
        },
        "date": 1740553681918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1292,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 968.546,
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
          "id": "4d278182d04b220659f8bc88f130070e2ca19797",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-26T14:52:48Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/4d278182d04b220659f8bc88f130070e2ca19797"
        },
        "date": 1740584078373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1285,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 948.982,
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
          "id": "295097a4bf045994e1c9b23f849ca52a1856e39c",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-26T14:52:48Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/295097a4bf045994e1c9b23f849ca52a1856e39c"
        },
        "date": 1740584863642,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 942.491,
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
          "id": "eccf1a4ed8e234b8ba1315c221b4242d639acd2c",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-27T03:55:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/eccf1a4ed8e234b8ba1315c221b4242d639acd2c"
        },
        "date": 1740680194488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 930.988,
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
          "id": "da51ade905f7818f25863ed739dfc0762b67e647",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-02-27T03:55:23Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/da51ade905f7818f25863ed739dfc0762b67e647"
        },
        "date": 1740684814805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 935.861,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "384a7fb64cef7c49f8f812511d247954bb3b1326",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/384a7fb64cef7c49f8f812511d247954bb3b1326"
        },
        "date": 1740747459957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1288,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 940.322,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "22dc9252a88cf368aba103f89f8004dd4fcc25b3",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/22dc9252a88cf368aba103f89f8004dd4fcc25b3"
        },
        "date": 1740748236879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1304,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 939.501,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "b50212b3c1842ce34ab887e4d378b0fc75ac4248",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/b50212b3c1842ce34ab887e4d378b0fc75ac4248"
        },
        "date": 1740749718415,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1290,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 940.573,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "05640e9676979a4dd911bfaf856ce41294325b10",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/05640e9676979a4dd911bfaf856ce41294325b10"
        },
        "date": 1740749800804,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1328,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.867,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "f6af403ed762dcf8185013ddf2148250be45b1ba",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/f6af403ed762dcf8185013ddf2148250be45b1ba"
        },
        "date": 1740797814890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1331,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 946.757,
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
          "id": "ad16cd8112c43a2ba23cf32d06300636e1022826",
          "message": "CI: Integrate macOS/arm64",
          "timestamp": "2025-03-01T05:51:19Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/569/commits/ad16cd8112c43a2ba23cf32d06300636e1022826"
        },
        "date": 1740808835785,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1239,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 937.092,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "cf29716e09f1606e7189dedd84d386f24b59b8aa",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/cf29716e09f1606e7189dedd84d386f24b59b8aa"
        },
        "date": 1740829012929,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 937.077,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "2889609096613a525deb4eea3ad8730c3a85e52b",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/2889609096613a525deb4eea3ad8730c3a85e52b"
        },
        "date": 1740829475981,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1300,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 929.824,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "committer": {
            "name": "eleanorLYJ",
            "username": "eleanorLYJ"
          },
          "id": "d470cd50185cc76be7c3946cb4f45d8eb3a70aa5",
          "message": "Raise exception when RV32E instructions use x16-x31",
          "timestamp": "2025-01-05T15:46:20Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/578/commits/d470cd50185cc76be7c3946cb4f45d8eb3a70aa5"
        },
        "date": 1740839912582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 918.562,
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
          "id": "daf4fd0648d89cc98ff8f459a51edf8968b98587",
          "message": "Support readonly feature of VirtIO block device",
          "timestamp": "2025-03-12T18:57:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/584/commits/daf4fd0648d89cc98ff8f459a51edf8968b98587"
        },
        "date": 1741809274335,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1309,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 914.629,
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
          "id": "7beced09bb06117d48f4fc59a88e676f503367ed",
          "message": "Support readonly feature of VirtIO block device",
          "timestamp": "2025-03-12T18:57:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/584/commits/7beced09bb06117d48f4fc59a88e676f503367ed"
        },
        "date": 1741837079565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1310,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.229,
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
          "id": "d34087deada09dee13a9a880759df5f4fbf4acdb",
          "message": "Support readonly feature of VirtIO block device",
          "timestamp": "2025-03-12T18:57:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/584/commits/d34087deada09dee13a9a880759df5f4fbf4acdb"
        },
        "date": 1741845204490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.321,
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
          "id": "b26e7fc45dab741c110eaeb8a250fa4360e517a9",
          "message": "Support readonly feature of VirtIO block device",
          "timestamp": "2025-03-12T18:57:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/584/commits/b26e7fc45dab741c110eaeb8a250fa4360e517a9"
        },
        "date": 1742115629155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.165,
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
          "id": "c9e2b5fbeb2ef9de4f1e45267c46b48eb756b896",
          "message": "Support readonly feature of VirtIO block device",
          "timestamp": "2025-03-12T18:57:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/584/commits/c9e2b5fbeb2ef9de4f1e45267c46b48eb756b896"
        },
        "date": 1742116658890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1274,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 913.979,
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
          "id": "da0053e0f96315e1c57bb1c0449155a26deffe83",
          "message": "Enable virtio-blk to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/da0053e0f96315e1c57bb1c0449155a26deffe83"
        },
        "date": 1742239744926,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 897.93,
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
          "id": "567e8d9ed5e38d190eb25a31bf6338c279adab03",
          "message": "Enable virtio-blk to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/567e8d9ed5e38d190eb25a31bf6338c279adab03"
        },
        "date": 1742239894148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1300,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 914.338,
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
          "id": "b74d2333934f35b135620c8c80a52bdb69b79f4a",
          "message": "Enable virtio-blk to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/b74d2333934f35b135620c8c80a52bdb69b79f4a"
        },
        "date": 1742240479655,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.702,
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
          "id": "7a4a903a70523d67d0c03b941489fc6eb5c727af",
          "message": "Enable virtio-blk to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/7a4a903a70523d67d0c03b941489fc6eb5c727af"
        },
        "date": 1742241394713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1309,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.142,
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
          "id": "9409aa12f2440b789c4692a4bfb095a8b4a022d8",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/9409aa12f2440b789c4692a4bfb095a8b4a022d8"
        },
        "date": 1742242520565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1279,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.947,
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
          "id": "5163318d1546b21ef1409c863f9e2ec68b693b43",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/5163318d1546b21ef1409c863f9e2ec68b693b43"
        },
        "date": 1742242621259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1295,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.234,
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
          "id": "d67e6e0ff5dc98b337970552e5551f7c52cc0b66",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/d67e6e0ff5dc98b337970552e5551f7c52cc0b66"
        },
        "date": 1742277692645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.981,
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
          "id": "5db091a0ac7872a75c52967fff3a3b1f4ceac25f",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/5db091a0ac7872a75c52967fff3a3b1f4ceac25f"
        },
        "date": 1742278868768,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1149,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.075,
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
          "id": "ec68944b5c37eb5068c98e67cf348a6c6de72816",
          "message": "Dynamically configure VirtIO node of Device Tree",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/586/commits/ec68944b5c37eb5068c98e67cf348a6c6de72816"
        },
        "date": 1742311205025,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1282,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.539,
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
          "id": "a7e6799365b2eab2f2b44dda732fea66edbf34e4",
          "message": "Dynamically configure VirtIO node of Device Tree",
          "timestamp": "2025-03-17T06:37:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/586/commits/a7e6799365b2eab2f2b44dda732fea66edbf34e4"
        },
        "date": 1742316062094,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.816,
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
          "id": "18fad4407a3db62f135107806bd758b74d21f376",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/18fad4407a3db62f135107806bd758b74d21f376"
        },
        "date": 1742395590136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1303,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 921.871,
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
          "id": "e3aab19cdc3609612d92272be14a4df4d59d257c",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/e3aab19cdc3609612d92272be14a4df4d59d257c"
        },
        "date": 1742398945713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1261,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 914.938,
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
          "id": "119d07ac5c5e5e00f5b07513312b33ec8c2153b0",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/119d07ac5c5e5e00f5b07513312b33ec8c2153b0"
        },
        "date": 1742399110404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1307,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.445,
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
          "id": "e13c1566d5dcd429ff5f0c0bc7aa521f5d897f02",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/e13c1566d5dcd429ff5f0c0bc7aa521f5d897f02"
        },
        "date": 1742409109544,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1310,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.162,
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
          "id": "f870ce320ba3f84a0e3e577d6c8744db7f61c56f",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/f870ce320ba3f84a0e3e577d6c8744db7f61c56f"
        },
        "date": 1742409819455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.289,
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
          "id": "a1e991fe4f6bc857a237662247d004d491cd7566",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/a1e991fe4f6bc857a237662247d004d491cd7566"
        },
        "date": 1742411071612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 901.116,
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
          "id": "8ca76bf0939f4ceaafa958d17c4ab7f17c227f62",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/8ca76bf0939f4ceaafa958d17c4ab7f17c227f62"
        },
        "date": 1742411212260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.343,
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
          "id": "68fb6cdb4783036247269499e1af9723fe6b21ec",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/68fb6cdb4783036247269499e1af9723fe6b21ec"
        },
        "date": 1742411498345,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 910.651,
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
          "id": "37cf3f35337749e1ea9ee054ba00cbd80f06a04b",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/37cf3f35337749e1ea9ee054ba00cbd80f06a04b"
        },
        "date": 1742412300678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1286,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 918.14,
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
          "id": "db6b55a4025fe439beb83167319d642056d3f9de",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/db6b55a4025fe439beb83167319d642056d3f9de"
        },
        "date": 1742479742300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.678,
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
          "id": "a93b351a2a687aca9581219883d53cbbd2f18e21",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/a93b351a2a687aca9581219883d53cbbd2f18e21"
        },
        "date": 1742480018075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 912.259,
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
          "id": "1b8c3008f523dada10e2188d38ef4239285b38a3",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/1b8c3008f523dada10e2188d38ef4239285b38a3"
        },
        "date": 1742480557813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 913.268,
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
          "id": "d1743ff59790b50e9fb142022455dccd48637ac0",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/d1743ff59790b50e9fb142022455dccd48637ac0"
        },
        "date": 1742482364106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 913.984,
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
          "id": "e2e87ee26385a3602bdbee4629d58bc85e986fa1",
          "message": "Enable VirtIO block to access hostOS /dev/ block devices",
          "timestamp": "2025-03-19T14:31:34Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/572/commits/e2e87ee26385a3602bdbee4629d58bc85e986fa1"
        },
        "date": 1742482465998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.239,
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
          "id": "9c8f2ad3b36b5f569c4be904125062d3c6f3bb6c",
          "message": "Update mini-gdbstub with the API changes",
          "timestamp": "2025-03-26T15:17:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/589/commits/9c8f2ad3b36b5f569c4be904125062d3c6f3bb6c"
        },
        "date": 1743003764017,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1317,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.715,
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
          "id": "874ad5c7660c2ccfc1d59a495d0a5b5ef286dcc3",
          "message": "Update mini-gdbstub with the API changes",
          "timestamp": "2025-03-26T15:17:18Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/589/commits/874ad5c7660c2ccfc1d59a495d0a5b5ef286dcc3"
        },
        "date": 1743004258333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1287,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 910.358,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "4a13abfab3e133d7796ab38b6fb982d7ad12b309",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/4a13abfab3e133d7796ab38b6fb982d7ad12b309"
        },
        "date": 1745831849521,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.194,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "d5242ac0348a6d6fafefb52fe4edb90c536503e0",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/d5242ac0348a6d6fafefb52fe4edb90c536503e0"
        },
        "date": 1745840748006,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1280,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.508,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "e0208af0278ef2b6ba692eca748fe13506ccff94",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/e0208af0278ef2b6ba692eca748fe13506ccff94"
        },
        "date": 1745861929083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1274,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.78,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "f478189c5781b1f88431418e39a291545dd78f9d",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/f478189c5781b1f88431418e39a291545dd78f9d"
        },
        "date": 1745900433038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1300,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.637,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "e2a430a3ff1d0531961965e1bff8bdd1f8012d57",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/e2a430a3ff1d0531961965e1bff8bdd1f8012d57"
        },
        "date": 1745900598513,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1305,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 918.575,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "5001cfd1645c8be9caeb3986fd1cfeab814f5ebf",
          "message": "Update timer correctly",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/5001cfd1645c8be9caeb3986fd1cfeab814f5ebf"
        },
        "date": 1745905090418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1087,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.504,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "committer": {
            "name": "vacantron",
            "username": "vacantron"
          },
          "id": "a27625bbbb672ea690717b12f0c13378fd462d69",
          "message": "Advance timer properly during JIT execution",
          "timestamp": "2024-11-19T06:47:52Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/592/commits/a27625bbbb672ea690717b12f0c13378fd462d69"
        },
        "date": 1745946339061,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1285,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.126,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lzzz666",
            "username": "Lzzz666"
          },
          "committer": {
            "name": "Lzzz666",
            "username": "Lzzz666"
          },
          "id": "2ab686a8ac4b42c5cb5034f630b3158f7517e729",
          "message": "Remove misleading TRACE log comment",
          "timestamp": "2025-05-16T08:08:44Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/597/commits/2ab686a8ac4b42c5cb5034f630b3158f7517e729"
        },
        "date": 1747383476827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1322,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.46,
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
          "id": "1e882218fa89ac86c344f4803e37e61712f2eed7",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-04T00:38:26Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/1e882218fa89ac86c344f4803e37e61712f2eed7"
        },
        "date": 1751591665605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1276,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.691,
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
          "id": "f7f20f2506150dcfecd4a95799af6d2843ba0dd2",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-04T08:12:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/f7f20f2506150dcfecd4a95799af6d2843ba0dd2"
        },
        "date": 1751618034615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1319,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 881.427,
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
          "id": "b103be801b8f263a1ac74a52d92eab54329100cd",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-04T08:12:41Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/b103be801b8f263a1ac74a52d92eab54329100cd"
        },
        "date": 1751618241879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 918.459,
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
          "id": "77408dd26148f36521f96da531539494f9c7063a",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-05T11:11:21Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/77408dd26148f36521f96da531539494f9c7063a"
        },
        "date": 1751719564908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1282,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 927.709,
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
          "id": "906061a307704c2bc56a620b871fc99ed607867e",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-05T14:37:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/906061a307704c2bc56a620b871fc99ed607867e"
        },
        "date": 1751732582761,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1329,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 926.101,
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
          "id": "1f72e2b06c52e6faf1c837b740019ca9ed9ba80d",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-05T14:37:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/1f72e2b06c52e6faf1c837b740019ca9ed9ba80d"
        },
        "date": 1751734274260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1273,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 903.084,
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
          "id": "05924ce06341c4df166c509d1da01d756030ba10",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-05T14:37:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/05924ce06341c4df166c509d1da01d756030ba10"
        },
        "date": 1751735491078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1272,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.357,
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
          "id": "b27912a6530ad8f128384cd40a8879ff12312cd6",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-06T05:43:53Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/b27912a6530ad8f128384cd40a8879ff12312cd6"
        },
        "date": 1751781219913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1292,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 923.834,
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
          "id": "d8bce74553d4e0d176e367c24ef1605dfd996f15",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-06T18:15:38Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/d8bce74553d4e0d176e367c24ef1605dfd996f15"
        },
        "date": 1751826737748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1175,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 910.965,
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
          "id": "e022ac7135f6503f7209b0c974a0a11b2a0a4384",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/e022ac7135f6503f7209b0c974a0a11b2a0a4384"
        },
        "date": 1751985271284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1276,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.536,
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
          "id": "aca8c42457951d93e801353088c3893c4dd40ddd",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/aca8c42457951d93e801353088c3893c4dd40ddd"
        },
        "date": 1752386751294,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 904.186,
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
          "id": "7fa050fcc6d9800753fe0cfb0d08aa7cf27a4c00",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/7fa050fcc6d9800753fe0cfb0d08aa7cf27a4c00"
        },
        "date": 1752388165300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1315,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.049,
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
          "id": "a24c0c0eb5ae63d1e8e085e7785249932048f183",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/a24c0c0eb5ae63d1e8e085e7785249932048f183"
        },
        "date": 1752389354218,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1275,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 914.229,
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
          "id": "2738cfc6c54053904fb700547f46294dfd79315d",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/2738cfc6c54053904fb700547f46294dfd79315d"
        },
        "date": 1752391411890,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1256,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 915.862,
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
          "id": "faac5939938539a04cedc46b4d77256991caf557",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/faac5939938539a04cedc46b4d77256991caf557"
        },
        "date": 1752392273807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1320,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 930.573,
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
          "id": "a5afe4dae2caad120cf732f1d046d59ebbfc3d69",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-08T14:11:51Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/a5afe4dae2caad120cf732f1d046d59ebbfc3d69"
        },
        "date": 1752403995048,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1308,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 913.009,
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
          "id": "39ff299b34daee1339aee693cb4bc9b3626ead5e",
          "message": "Enable System Emulation in Web Browsers",
          "timestamp": "2025-07-15T15:58:14Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/602/commits/39ff299b34daee1339aee693cb4bc9b3626ead5e"
        },
        "date": 1752723036857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1294,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 925.371,
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
          "id": "e68162177c2f96d92f33b58298a61b73c133f281",
          "message": "Support multiple virtio block devices",
          "timestamp": "2025-07-21T02:53:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/605/commits/e68162177c2f96d92f33b58298a61b73c133f281"
        },
        "date": 1756592452302,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1287,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 921.901,
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
          "id": "678c47a892be0b367a2687fcde0e173e31e2be9c",
          "message": "Support multiple virtio block devices",
          "timestamp": "2025-07-21T02:53:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/605/commits/678c47a892be0b367a2687fcde0e173e31e2be9c"
        },
        "date": 1756621592638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1290,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 913.951,
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
          "id": "9b4f2fe9e49abceb84ae0564358685d2186a1302",
          "message": "Support multiple virtio block devices",
          "timestamp": "2025-07-21T02:53:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/605/commits/9b4f2fe9e49abceb84ae0564358685d2186a1302"
        },
        "date": 1757228297073,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1323,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 904.68,
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
          "id": "2476710d2ea5e813295f7471de096593b6c68c06",
          "message": "Implement Goldfish RTC",
          "timestamp": "2025-07-21T02:53:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/613/commits/2476710d2ea5e813295f7471de096593b6c68c06"
        },
        "date": 1758465105968,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 900.071,
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
          "id": "5ee534aa40dbeb4dc1cc1c0e3cf20582ae016226",
          "message": "Implement Goldfish RTC",
          "timestamp": "2025-07-21T02:53:08Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/613/commits/5ee534aa40dbeb4dc1cc1c0e3cf20582ae016226"
        },
        "date": 1758468099820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1306,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.35,
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
          "id": "c69de51348f9738316caf6d24510424165884d4d",
          "message": "Eliminate ThreadSanitizer warnings in JIT T2C mode\n\nThis fixes data races detected by ThreadSanitizer when running with JIT\ncompilation enabled:\n\n1. Fix quit flag data race:\n   - Change 'volatile bool quit' to '_Atomic bool quit'\n   - Use atomic_store() for writes and atomic_load() for reads\n   - Initialize with atomic_init()\n\n2. Fix TOCTOU race in wait_queue access:\n   - Move list_empty() check inside mutex-protected critical section\n   - Hold mutex during entire queue manipulation\n\nThese changes ensure thread-safe communication between the main thread\nand T2C compilation thread, eliminating all TSAN warning while improving\nCPU efficiency by avoiding busy-waiting.",
          "timestamp": "2025-09-22T01:48:15+08:00",
          "tree_id": "42d04977f7d2debaaeb7b7fe9eb8e0f45fc5c51b",
          "url": "https://github.com/sysprog21/rv32emu/commit/c69de51348f9738316caf6d24510424165884d4d"
        },
        "date": 1758477516805,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1303,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 900.293,
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
          "id": "c69de51348f9738316caf6d24510424165884d4d",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/c69de51348f9738316caf6d24510424165884d4d"
        },
        "date": 1758477530120,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.985,
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
          "id": "a3d46479af193e38b78370d2a02d4c224466094c",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/a3d46479af193e38b78370d2a02d4c224466094c"
        },
        "date": 1758478224057,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.461,
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
          "id": "a3d46479af193e38b78370d2a02d4c224466094c",
          "message": "Eliminate ThreadSanitizer warnings in JIT T2C mode\n\nThis fixes data races detected by ThreadSanitizer when running with JIT\ncompilation enabled:\n1. Fix quit flag data race:\n   - Change 'volatile bool quit' to '_Atomic bool quit'\n   - Use atomic_store() for writes and atomic_load() for reads\n2. Fix TOCTOU race in wait_queue access:\n   - Move list_empty() check inside mutex-protected critical section\n   - Hold mutex during entire queue manipulation\n\nThese changes ensure thread-safe communication between the main thread\nand T2C compilation thread, eliminating all TSAN warning while improving\nCPU efficiency by avoiding busy-waiting.",
          "timestamp": "2025-09-22T02:02:29+08:00",
          "tree_id": "402d3b32caae3387f0911f8467f460fb3bbd616f",
          "url": "https://github.com/sysprog21/rv32emu/commit/a3d46479af193e38b78370d2a02d4c224466094c"
        },
        "date": 1758478229893,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1301,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.226,
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
          "id": "c75998b09a192093aecf6163c45189aaa29917c3",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/c75998b09a192093aecf6163c45189aaa29917c3"
        },
        "date": 1758481604116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.892,
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
          "id": "c75998b09a192093aecf6163c45189aaa29917c3",
          "message": "Eliminate ThreadSanitizer warnings in JIT T2C mode\n\nThis fixes data races detected by ThreadSanitizer when running with JIT\ncompilation enabled:\n1. Fix quit flag data race:\n2. Fix TOCTOU race in wait_queue access:\n   - Move list_empty() check inside mutex-protected critical section\n   - Hold mutex during entire queue manipulation\n\nThese changes ensure thread-safe communication between the main thread\nand T2C compilation thread, eliminating all TSAN warning while improving\nCPU efficiency by avoiding busy-waiting.",
          "timestamp": "2025-09-22T02:59:05+08:00",
          "tree_id": "8ccd16cefef4e651df7269e070cfef3e9fe0e1bb",
          "url": "https://github.com/sysprog21/rv32emu/commit/c75998b09a192093aecf6163c45189aaa29917c3"
        },
        "date": 1758481610792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1268,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 902.578,
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
          "id": "be54638d23012079c8ec0ab4194224d534b68b6f",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nFixed by declaring hot2 as volatile to ensure proper cross-thread\nvisibility. The volatile qualifier guarantees fresh reads from memory\nand prevents compiler optimizations that could reorder accesses.",
          "timestamp": "2025-09-22T04:17:04+08:00",
          "tree_id": "ccc5ae1db2b44ec783bb061a26c0a399da5f9b21",
          "url": "https://github.com/sysprog21/rv32emu/commit/be54638d23012079c8ec0ab4194224d534b68b6f"
        },
        "date": 1758486306629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1313,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 916.822,
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
          "id": "be54638d23012079c8ec0ab4194224d534b68b6f",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/be54638d23012079c8ec0ab4194224d534b68b6f"
        },
        "date": 1758486313953,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1308,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.5,
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
          "id": "21484fbe139e6058574e65955b1bd26df91b3e72",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/21484fbe139e6058574e65955b1bd26df91b3e72"
        },
        "date": 1758486479850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1303,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 923.471,
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
          "id": "21484fbe139e6058574e65955b1bd26df91b3e72",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nFixed by declaring hot2 as volatile to ensure proper cross-thread\nvisibility. The volatile qualifier guarantees fresh reads from memory\nand prevents compiler optimizations that could reorder accesses.",
          "timestamp": "2025-09-22T04:20:40+08:00",
          "tree_id": "db70c1c3e53d95601dcc489fb9cb9b33f5dae610",
          "url": "https://github.com/sysprog21/rv32emu/commit/21484fbe139e6058574e65955b1bd26df91b3e72"
        },
        "date": 1758486493668,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1241,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.561,
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
          "id": "97314af10e31ea11e9e2147d1d85b4d822ad5272",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nProblem:\n- volatile alone doesn't provide memory ordering guarantees\n- CPU could reorder operations, making hot2=true visible before block->func\n- Led to executing stale or partially written function pointers\n\nSolution:\n- Use __atomic_store_n with __ATOMIC_RELEASE when setting hot2\n- Use __atomic_load_n with __ATOMIC_ACQUIRE when reading hot2\n- Release-Acquire synchronization ensures proper ordering\n\nThis creates a happens-before relationship: when the main thread\nobserves hot2=true via acquire, it is guaranteed to see all writes\n(including block->func) that happened before the release.",
          "timestamp": "2025-09-22T09:02:41+08:00",
          "tree_id": "e1126cbb37c675ad4bfdf5f6807af7e0b9e2acd9",
          "url": "https://github.com/sysprog21/rv32emu/commit/97314af10e31ea11e9e2147d1d85b4d822ad5272"
        },
        "date": 1758503460071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1295,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.567,
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
          "id": "97314af10e31ea11e9e2147d1d85b4d822ad5272",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/97314af10e31ea11e9e2147d1d85b4d822ad5272"
        },
        "date": 1758503505425,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1062,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 921.974,
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
          "id": "f9feb2f688186ae71cd424d1373cfb2a58c9007a",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/f9feb2f688186ae71cd424d1373cfb2a58c9007a"
        },
        "date": 1758508788002,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1318,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 917.547,
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
          "id": "f9feb2f688186ae71cd424d1373cfb2a58c9007a",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nProblem:\n- volatile alone doesn't provide memory ordering guarantees\n- CPU could reorder operations, making hot2=true visible before block->func\n- Led to executing stale or partially written function pointers\n\nSolution:\n- Use __atomic_store_n with __ATOMIC_RELEASE when setting hot2\n- Use __atomic_load_n with __ATOMIC_ACQUIRE when reading hot2\n- Release-Acquire synchronization ensures proper ordering\n\nThis creates a happens-before relationship: when the main thread\nobserves hot2=true via acquire, it is guaranteed to see all writes\n(including block->func) that happened before the release.",
          "timestamp": "2025-09-22T10:32:27+08:00",
          "tree_id": "822d6277d0eac2d7a8903ee5da2b3d818f8a8f42",
          "url": "https://github.com/sysprog21/rv32emu/commit/f9feb2f688186ae71cd424d1373cfb2a58c9007a"
        },
        "date": 1758508800344,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1326,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 923.558,
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
          "id": "55f0d9c10a8ec87751ba11568feee7fd881d127b",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nProblem:\n- volatile alone doesn't provide memory ordering guarantees\n- CPU could reorder operations, making hot2=true visible before block->func\n- Led to executing stale or partially written function pointers\n\nSolution:\n- Use __atomic_store_n with __ATOMIC_RELEASE when setting hot2\n- Use __atomic_load_n with __ATOMIC_ACQUIRE when reading hot2\n- Release-Acquire synchronization ensures proper ordering\n\nThis creates a happens-before relationship: when the main thread\nobserves hot2=true via acquire, it is guaranteed to see all writes\n(including block->func) that happened before the release.",
          "timestamp": "2025-09-22T10:35:36+08:00",
          "tree_id": "c5b705f3fb46ab81c2aab1898081b9e492a72834",
          "url": "https://github.com/sysprog21/rv32emu/commit/55f0d9c10a8ec87751ba11568feee7fd881d127b"
        },
        "date": 1758508978842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1302,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 921.738,
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
          "id": "55f0d9c10a8ec87751ba11568feee7fd881d127b",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/55f0d9c10a8ec87751ba11568feee7fd881d127b"
        },
        "date": 1758508985353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1311,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.707,
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
          "id": "4a906047b6acc1d532d0d7c8028b79accb8da479",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/4a906047b6acc1d532d0d7c8028b79accb8da479"
        },
        "date": 1758511408368,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1314,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 911.774,
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
          "id": "4a906047b6acc1d532d0d7c8028b79accb8da479",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nProblem:\n- volatile alone doesn't provide memory ordering guarantees\n- CPU could reorder operations, making hot2=true visible before block->func\n- Led to executing stale or partially written function pointers\n\nSolution:\n- Use __atomic_store_n with __ATOMIC_RELEASE when setting hot2\n- Use __atomic_load_n with __ATOMIC_ACQUIRE when reading hot2\n- Release-Acquire synchronization ensures proper ordering\n\nThis creates a happens-before relationship: when the main thread\nobserves hot2=true via acquire, it is guaranteed to see all writes\n(including block->func) that happened before the release.",
          "timestamp": "2025-09-22T11:16:10+08:00",
          "tree_id": "b8c9425287d2701e01fe06c774cb7244bcd467d3",
          "url": "https://github.com/sysprog21/rv32emu/commit/4a906047b6acc1d532d0d7c8028b79accb8da479"
        },
        "date": 1758511417197,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1261,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 921.467,
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
          "id": "a4fac0bc0ccd969d196c8b6072ff02dae103e7c9",
          "message": "Fix T2C memory visibility race\n\nThe T2C compilation thread could set hot2 flag before compiled code was\nfully visible to the main thread, causing execution of invalid function\npointers. This resulted in incorrect calculation results in the pi test.\n\nProblem:\n- volatile alone doesn't provide memory ordering guarantees\n- CPU could reorder operations, making hot2=true visible before block->func\n- Led to executing stale or partially written function pointers\n\nSolution:\n- Use __atomic_store_n with __ATOMIC_RELEASE when setting hot2\n- Use __atomic_load_n with __ATOMIC_ACQUIRE when reading hot2\n- Release-Acquire synchronization ensures proper ordering\n\nThis creates a happens-before relationship: when the main thread\nobserves hot2=true via acquire, it is guaranteed to see all writes\n(including block->func) that happened before the release.",
          "timestamp": "2025-09-22T11:16:48+08:00",
          "tree_id": "05738163dd97c8662358d2297ff6b2a8b22aa047",
          "url": "https://github.com/sysprog21/rv32emu/commit/a4fac0bc0ccd969d196c8b6072ff02dae103e7c9"
        },
        "date": 1758511470002,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1273,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 899.314,
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
          "id": "a4fac0bc0ccd969d196c8b6072ff02dae103e7c9",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/a4fac0bc0ccd969d196c8b6072ff02dae103e7c9"
        },
        "date": 1758511542470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1283,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 924.646,
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
          "id": "d98c571a8148c9e348024bdb448d6c484bf0f211",
          "message": "Fix T2C synchronization races\n\nThis commit addresses critical race conditions in the T2C and implements\na complete thread-safe memory management system using hazard pointers\nand C11 atomics.\n\nRoot Causes Addressed:\n1. Memory ordering issue where hot2 flag could become visible before the\n   function pointer, leading to execution of uninitialized code\n2. Use-after-free when T2C-compiled blocks are evicted from cache while\n   still executing in another thread\n3. Missing synchronization between compilation and execution threads\n4. Inconsistent use of atomic operations\n\nSolution:\n\n1. Hazard Pointer Implementation:\n   - Complete hazard pointer system for safe memory reclamation\n   - Per-thread hazard pointer slots with atomic operations\n   - Retired list with batch reclamation (threshold: 128 blocks)\n   - Protects blocks during both execution and compilation\n   - Lock-free memory management without performance penalty\n\n2. C11 Atomics Throughout:\n   - All atomic operations use standard C11 atomics\n   - _Atomic(bool) for hot2 and compiled flags\n   - _Atomic(void*) for function pointer\n   - Proper atomic initialization with atomic_init()\n   - Consistent memory ordering semantics\n\n3. Memory Ordering and Barriers:\n   - SEQ_CST barrier between function pointer and hot2 flag\n   - Double-check pattern for hot2 validation\n   - ACQUIRE/RELEASE semantics for all critical operations\n   - Proper synchronization for cache coherency\n\n4. Block State Management:\n   - Blocks being compiled are protected from eviction\n   - Sequence numbers prevent ABA problems\n   - Reference counting alternative via hazard pointers\n   - Safe state transitions with atomic operations",
          "timestamp": "2025-09-22T17:09:58+08:00",
          "tree_id": "7ea54e77198cc76e1b9d054dd05ef407c0d3a97e",
          "url": "https://github.com/sysprog21/rv32emu/commit/d98c571a8148c9e348024bdb448d6c484bf0f211"
        },
        "date": 1758532743724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1274,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 897.375,
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
          "id": "d98c571a8148c9e348024bdb448d6c484bf0f211",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/d98c571a8148c9e348024bdb448d6c484bf0f211"
        },
        "date": 1758532758607,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1292,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 905.509,
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
          "id": "f5888090ada0b559df1dd2f313a30db75a091f0f",
          "message": "Fix T2C synchronization races\n\nThis commit addresses critical race conditions in the T2C and implements\na complete thread-safe memory management system using hazard pointers\nand C11 atomics.\n\nRoot Causes Addressed:\n1. Memory ordering issue where hot2 flag could become visible before the\n   function pointer, leading to execution of uninitialized code\n2. Use-after-free when T2C-compiled blocks are evicted from cache while\n   still executing in another thread\n3. Missing synchronization between compilation and execution threads\n4. Inconsistent use of atomic operations\n\nSolution:\n\n1. Hazard Pointer Implementation:\n   - Complete hazard pointer system for safe memory reclamation\n   - Per-thread hazard pointer slots with atomic operations\n   - Retired list with batch reclamation (threshold: 128 blocks)\n   - Protects blocks during both execution and compilation\n   - Lock-free memory management without performance penalty\n\n2. C11 Atomics Throughout:\n   - All atomic operations use standard C11 atomics\n   - _Atomic(bool) for hot2 and compiled flags\n   - _Atomic(void*) for function pointer\n   - Proper atomic initialization with atomic_init()\n   - Consistent memory ordering semantics\n\n3. Memory Ordering and Barriers:\n   - SEQ_CST barrier between function pointer and hot2 flag\n   - Double-check pattern for hot2 validation\n   - ACQUIRE/RELEASE semantics for all critical operations\n   - Proper synchronization for cache coherency\n\n4. Block State Management:\n   - Blocks being compiled are protected from eviction\n   - Sequence numbers prevent ABA problems\n   - Reference counting alternative via hazard pointers\n   - Safe state transitions with atomic operations",
          "timestamp": "2025-09-22T17:20:00+08:00",
          "tree_id": "17d336987310c2bac78374c64f17237cf3edcc2f",
          "url": "https://github.com/sysprog21/rv32emu/commit/f5888090ada0b559df1dd2f313a30db75a091f0f"
        },
        "date": 1758533307735,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1322,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 920.624,
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
          "id": "f5888090ada0b559df1dd2f313a30db75a091f0f",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/f5888090ada0b559df1dd2f313a30db75a091f0f"
        },
        "date": 1758533311053,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1316,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 918.586,
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
          "id": "1c34e6c0d9d4ccf2a69a56492030b78cc6739e35",
          "message": "Avoid unintended free()",
          "timestamp": "2025-09-22T18:05:14+08:00",
          "tree_id": "0d51184084e32b3f3e8a5b87e8385f5d185b8dd1",
          "url": "https://github.com/sysprog21/rv32emu/commit/1c34e6c0d9d4ccf2a69a56492030b78cc6739e35"
        },
        "date": 1758535968276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1297,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.836,
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
          "id": "1c34e6c0d9d4ccf2a69a56492030b78cc6739e35",
          "message": "Fix regressions",
          "timestamp": "2025-09-21T10:33:06Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/1c34e6c0d9d4ccf2a69a56492030b78cc6739e35"
        },
        "date": 1758535978778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1290,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 919.254,
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
          "id": "879d4eb80802fbe7c02052b29debf158472382c9",
          "message": "Fix regressions",
          "timestamp": "2025-09-22T17:09:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/879d4eb80802fbe7c02052b29debf158472382c9"
        },
        "date": 1758562203031,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1327,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 956.308,
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
          "id": "879d4eb80802fbe7c02052b29debf158472382c9",
          "message": "Fix T2C race conditions with immutable cache\n\nThe tier-2 JIT compiler (T2C) had critical race conditions, and multiple\nthreads were accessing and modifying shared block structures without\nproper synchronization.\n\nRoot causes identified:\n- T2C compilation thread held pointers to blocks that could be evicted\n- Block reuse from memory pool caused stale function pointer access\n- Complex synchronization with hot2 flag and reference counting was\n  insufficient\n\nSolution implemented:\n1. Created separate immutable T2C cache (t2c_cache) for compiled blocks\n   - T2C entries are never modified once created\n   - Eliminates all race conditions on compiled function access\n2. Deep copy block IR chains when queuing for compilation\n   - Compilation thread works on copies, not live blocks\n   - Blocks can be safely evicted during compilation\n3. Simplified synchronization logic\n   - Removed hot2 flag and complex reference counting\n   - Use simple compiled flag only to prevent re-queuing\n   - Clear flag when T2C code becomes available\n4. Fixed eviction logic to properly check compilation status",
          "timestamp": "2025-09-23T01:20:35+08:00",
          "tree_id": "0a58b94616b762004d807c38068d388d61a45c14",
          "url": "https://github.com/sysprog21/rv32emu/commit/879d4eb80802fbe7c02052b29debf158472382c9"
        },
        "date": 1758562215428,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1299,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 922.224,
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
          "id": "a568fcf2da91773b77e0f83cbbb492b9a73bae0b",
          "message": "Fix regressions",
          "timestamp": "2025-09-22T17:09:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/a568fcf2da91773b77e0f83cbbb492b9a73bae0b"
        },
        "date": 1758562435074,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1271,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 953.647,
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
          "id": "09667fb81b7a3a17a9ee6c5aa03f1a0dc19fd332",
          "message": "Fix T2C race conditions with immutable cache\n\nThe tier-2 JIT compiler (T2C) had critical race conditions, and multiple\nthreads were accessing and modifying shared block structures without\nproper synchronization.\n\nRoot causes identified:\n- T2C compilation thread held pointers to blocks that could be evicted\n- Block reuse from memory pool caused stale function pointer access\n- Complex synchronization with hot2 flag and reference counting was\n  insufficient\n\nSolution implemented:\n1. Created separate immutable T2C cache (t2c_cache) for compiled blocks\n   - T2C entries are never modified once created\n   - Eliminates all race conditions on compiled function access\n2. Deep copy block IR chains when queuing for compilation\n   - Compilation thread works on copies, not live blocks\n   - Blocks can be safely evicted during compilation\n3. Simplified synchronization logic\n   - Removed hot2 flag and complex reference counting\n   - Use simple compiled flag only to prevent re-queuing\n   - Clear flag when T2C code becomes available\n4. Fixed eviction logic to properly check compilation status",
          "timestamp": "2025-09-23T01:31:27+08:00",
          "tree_id": "258522ac44f8c008e3c961a528f3d5698008ce79",
          "url": "https://github.com/sysprog21/rv32emu/commit/09667fb81b7a3a17a9ee6c5aa03f1a0dc19fd332"
        },
        "date": 1758563103934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1333,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 960.879,
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
          "id": "09667fb81b7a3a17a9ee6c5aa03f1a0dc19fd332",
          "message": "Fix T2C race conditions",
          "timestamp": "2025-09-22T17:09:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/09667fb81b7a3a17a9ee6c5aa03f1a0dc19fd332"
        },
        "date": 1758563170826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1332,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 964.248,
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
          "id": "65fb984302e34a341521132e2d79eb036161d55c",
          "message": "Fix T2C race conditions with immutable cache\n\nThe tier-2 JIT compiler (T2C) had critical race conditions, and multiple\nthreads were accessing and modifying shared block structures without\nproper synchronization.\n\nRoot causes identified:\n- T2C compilation thread held pointers to blocks that could be evicted\n- Block reuse from memory pool caused stale function pointer access\n- Complex synchronization with hot2 flag and reference counting was\n  insufficient\n\nSolution implemented:\n1. Created separate immutable T2C cache (t2c_cache) for compiled blocks\n   - T2C entries are never modified once created\n   - Eliminates all race conditions on compiled function access\n2. Deep copy block IR chains when queuing for compilation\n   - Compilation thread works on copies, not live blocks\n   - Blocks can be safely evicted during compilation\n3. Simplified synchronization logic\n   - Removed hot2 flag and complex reference counting\n   - Use simple compiled flag only to prevent re-queuing\n   - Clear flag when T2C code becomes available\n4. Fixed eviction logic to properly check compilation status",
          "timestamp": "2025-09-23T02:02:06+08:00",
          "tree_id": "70969794af625629e0d16020abaca390d7283d6c",
          "url": "https://github.com/sysprog21/rv32emu/commit/65fb984302e34a341521132e2d79eb036161d55c"
        },
        "date": 1758564557381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1323,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 952.182,
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
          "id": "65fb984302e34a341521132e2d79eb036161d55c",
          "message": "Fix T2C race conditions",
          "timestamp": "2025-09-22T17:09:24Z",
          "url": "https://github.com/sysprog21/rv32emu/pull/614/commits/65fb984302e34a341521132e2d79eb036161d55c"
        },
        "date": 1758564564230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Dhrystone",
            "value": 1324,
            "unit": "Average DMIPS over 10 runs"
          },
          {
            "name": "Coremark",
            "value": 941.982,
            "unit": "Average iterations/sec over 10 runs"
          }
        ]
      }
    ]
  }
}