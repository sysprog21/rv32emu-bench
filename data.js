window.BENCHMARK_DATA = {
  "lastUpdate": 1695562130698,
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
      }
    ]
  }
}