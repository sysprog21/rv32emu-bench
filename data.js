window.BENCHMARK_DATA = {
  "lastUpdate": 1696131071397,
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
      }
    ]
  }
}