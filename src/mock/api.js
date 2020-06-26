import Mock from 'mockjs'
// Mock.mock('/api/user/login',{
//         "status": 0,
//         "data": {
//           "id": 1,
//           "username": "admin",
//           "password": "123",
//           "email": "admin@51purse.com",
//           "phone": null,
//           "role": 0,
//           "createTime": 1479048325000,
//           "updateTime": 1479048325000
//         }
//       }
// )
Mock.mock('/api/user','get', options => {
  return{ "status":10}
})
Mock.mock('/api/carts/products/sum','get',options => {
  return{ "status":10}
})
Mock.mock(/\/api\/user\/login/,'post',options => {
  const {username,password} = JSON.parse(options.body);
  if(username !== 'admin' && password !== '123'){
    return false;
  }
  return {
    "status":0,
    "data":{
      "id":1,
      username,
      password,
    }
  }
})

Mock.mock('/api/products',{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 7199.22
            },
            {
                "id": 2,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-2.png",
                "status":1,
                "price": 2999.11
            },
            {
              "id": 3,
              "categoryId": 2,
              "name": "aaaaaaaaa",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/nav-img/nav-3.png",
              "status":1,
              "price": 2999.11
            },
            {
              "id": 4,
              "categoryId": 2,
              "name": "oppo R8",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/nav-img/nav-4.png",
              "status":1,
              "price": 2999.11
            },
            {
              "id": 5,
              "categoryId": 2,
              "name": "  小米10 青春版 5G",
              "subtitle": "50倍潜望式变焦 / 轻薄5G手机",
              "mainImage": "/imgs/nav-img/nav-5.png",
              "status":1,
              "price": 2099
            },
            {
              "id": 6,
              "categoryId": 2,
              "name": "小米 10",
              "subtitle": "骁龙865/1亿像素相机",
              "mainImage": "/imgs/nav-img/nav-6.png",
              "status":1,
              "price": 3799
            },
            {
              "id": 7,
              "categoryId": 2,
              "name": " Redmi K30 Pro",
              "subtitle": "双模5G，骁龙865，弹出全面屏",
              "mainImage": "/imgs/newPhone/new1.webp",
              "status":1,
              "price": 2976
            },
            {
              "id": 8,
              "categoryId": 2,
              "name": "Redmi K30 Pro 变焦版",
              "subtitle": "双模5G，骁龙865，弹出全面屏",
              "mainImage": "/imgs/newPhone/new2.webp",
              "status":1,
              "price": 2178
            },
            {
              "id": 9,
              "categoryId": 2,
              "name": "小米 10",
              "subtitle": "骁龙865 / 50倍变焦",
              "mainImage": "/imgs/newPhone/new3.webp",
              "status":1,
              "price": 4215
            },
            {
              "id": 10,
              "categoryId": 2,
              "name": "Redmi K30",
              "subtitle": "120Hz流速屏，全速热爱",
              "mainImage": "/imgs/newPhone/new4.webp",
              "status":1,
              "price": 1499
            },
            {
              "id": 11,
              "categoryId": 2,
              "name": "oppo R8",
              "subtitle": "双模5G，120Hz流速屏",
              "mainImage": "/imgs/newPhone/new5.webp",
              "status":1,
              "price": 1899
            },
            {
              "id": 12,
              "categoryId": 2,
              "name": "red R8",
              "subtitle": "5000mAh超长续航",
              "mainImage": "/imgs/newPhone/new6.webp",
              "status":1,
              "price": 3199
            },
            {
              "id": 13,
              "categoryId": 2,
              "name": "oppo R8",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/newPhone/new7.webp",
              "status":1,
              "price": 2578
            },
            {
              "id": 14,
              "categoryId": 2,
              "name": "oppo R8",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/newPhone/new8.webp",
              "status":1,
              "price": 3156
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
})

Mock.mock('/api/cart',{
  "status": 0,
  "data": {
      "pageNum": 1,
      "pageSize": 10,
      "size": 2,
      "orderBy": null,
      "startRow": 1,
      "endRow": 2,
      "total": 2,
      "pages": 1,
      "list": [
          {
            "id": 7,
            "categoryId": 2,
            "name": " Redmi K30 Pro",
            "subtitle": "双模5G，骁龙865，弹出全面屏",
            "mainImage": "/imgs/newPhone/new1.webp",
            "status":1,
            "price": 2976
          },
          {
            "id": 8,
            "categoryId": 2,
            "name": "Redmi K30 Pro 变焦版",
            "subtitle": "双模5G，骁龙865，弹出全面屏",
            "mainImage": "/imgs/newPhone/new2.webp",
            "status":1,
            "price": 2178
          },
          {
            "id": 9,
            "categoryId": 2,
            "name": "小米 10",
            "subtitle": "骁龙865 / 50倍变焦",
            "mainImage": "/imgs/newPhone/new3.webp",
            "status":1,
            "price": 4215
          },
          {
            "id": 10,
            "categoryId": 2,
            "name": "Redmi K30",
            "subtitle": "120Hz流速屏，全速热爱",
            "mainImage": "/imgs/newPhone/new4.webp",
            "status":1,
            "price": 1499
          },
          {
            "id": 11,
            "categoryId": 2,
            "name": "oppo R8",
            "subtitle": "双模5G，120Hz流速屏",
            "mainImage": "/imgs/newPhone/new5.webp",
            "status":1,
            "price": 1899
          },
          {
            "id": 12,
            "categoryId": 2,
            "name": "red R8",
            "subtitle": "5000mAh超长续航",
            "mainImage": "/imgs/newPhone/new6.webp",
            "status":1,
            "price": 3199
          },
          {
            "id": 13,
            "categoryId": 2,
            "name": "oppo R8",
            "subtitle": "oppo促销进行中",
            "mainImage": "/imgs/newPhone/new7.webp",
            "status":1,
            "price": 2578
          },
          {
            "id": 14,
            "categoryId": 2,
            "name": "oppo R8",
            "subtitle": "oppo促销进行中",
            "mainImage": "/imgs/newPhone/new8.webp",
            "status":1,
            "price": 3156
          }
      ],
      "firstPage": 1,
      "prePage": 0,
      "nextPage": 0,
      "lastPage": 1,
      "isFirstPage": true,
      "isLastPage": true,
      "hasPreviousPage": false,
      "hasNextPage": false,
      "navigatePages": 8,
      "navigatepageNums": [
          1
      ]
  }
})