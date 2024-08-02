window.BENCHMARK_DATA = {
  "lastUpdate": 1722638525456,
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
      }
    ]
  }
}