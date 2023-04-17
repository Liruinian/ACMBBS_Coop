import Mock from 'mockjs'

Mock.mock('https://bbs.liruinian.top/api/getHomeSections', 'post', (config) => {
  const obj = JSON.parse(config.body)
  return {
    data: [
      {
        id: 1,
        title: '114514',
        clickTimes: 4
      },
      {
        id: 2,
        title: '1919810',
        clickTimes: 3
      },
      {
        id: 3,
        title: '啊啊啊啊啊',
        clickTimes: 2
      },
      {
        id: 6,
        title: '343435',
        clickTimes: 1
      },
      {
        id: 5,
        title: '32',
        clickTimes: 1
      }
    ],
    message: '获取热点帖子成功',
    status: 2000
  }
})

Mock.mock('https://bbs.liruinian.top/api/getPostList', 'post', (config) => {
  const obj = JSON.parse(config.body)
  return {
    data: [
      {
        pageCount: 3,
        postCount: 50,
        posts: [
          {
            likeCount: 0,
            id: 5,
            time: '2023-03-21 20:59:17',
            title: '32',
            clickTimes: 1,
            username: 'iM',
            content: '文章内容'
          }
        ],
        message: '获取帖子列表成功',
        status: 2000
      }
    ]
  }
})

Mock.mock('https://bbs.liruinian.top/api/getHotPost', 'post', (config) => {
  const obj = JSON.parse(config.body)
  return {
    message: '获取热点帖子成功',
    status: 2000,
    data: [
      {
        id: 2,
        title: '1919810',
        clickTimes: 3
      }
    ]
  }
})

Mock.mock('https://bbs.liruinian.top/api/login', 'post', (config) => {
  const obj = JSON.parse(config.body)
  if (obj.username === 'admin' && obj.password === 'b0b388ee173661219b7f39c4aa716eb5') {
    return {
      data: {
        UserId: 1,
        username: 'admin'
      },
      message: '登录成功',
      status: 2000
    }
  } else {
    return {
      message: '失败'
    }
  }
})

Mock.mock('https://bbs.liruinian.top/api/getPostDetail', 'post', (config) => {
  return {
    data: {
      commentPage: 1,
      comments: [
        {
          subCommentCount: 0,
          subCommentPage: 0,
          subComments: [],
          likeCount: 8,
          id: 5,
          time: '2023-03-15 20:50:53',
          userId: 6,
          content: '2',
          username: 'iMa'
        },
        {
          subCommentCount: 10,
          subCommentPage: 2,
          subComments: [
            {
              likeCount: 2,
              id: 2,
              time: '2023-02-16 20:51:47',
              userId: 8,
              content: '123',
              username: 'i'
            },
            {
              likeCount: 1,
              id: 5,
              time: '2023-02-23 20:52:03',
              userId: 31,
              content: '23324',
              username: 'tim'
            },
            {
              likeCount: 0,
              id: 13,
              time: '2023-03-15 21:27:03',
              userId: 8,
              content: '2313',
              username: 'i'
            },
            {
              likeCount: 0,
              id: 12,
              time: '2023-03-15 21:27:03',
              userId: 8,
              content: '2313',
              username: 'i'
            },
            {
              likeCount: 0,
              id: 11,
              time: '2023-03-15 21:27:03',
              userId: 8,
              content:
                '231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3',
              username: 'i'
            }
          ],
          likeCount: 0,
          id: 4,
          time: '2023-03-07 20:45:55',
          userId: 1,
          content:
            '231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3',

          username: 'iM'
        }
      ],
      likeCount: 0,
      id: 1,
      tag: '#学术研讨 #数学 #简单题 #积分',
      time: '2023-03-15 20:56:53',
      title:
        'dlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvndlncjkncjkasnkjsdnvcdnvjdfknvkjvn',
      userId: 1,
      content:
        '231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3231aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3',

      clickTimes: 4,
      commentCount: 2,
      username: 'iM'
    },
    message: '获取帖子详情成功',
    status: 2000
  }
})
