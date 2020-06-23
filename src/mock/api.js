import Mock from 'mockjs'
Mock.mock('/api/user/login',{
        "status": 0,
        "data": {
          "id": 12,
          "username": "admin",
          "email": "admin@51purse.com",
          "phone": null,
          "role": 0,
          "createTime": 1479048325000,
          "updateTime": 1479048325000
        }
      }
)

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
              "name": "oppo R8",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/nav-img/nav-5.png",
              "status":1,
              "price": 2999.11
            },
            {
              "id": 6,
              "categoryId": 2,
              "name": "oppo R8",
              "subtitle": "oppo促销进行中",
              "mainImage": "/imgs/nav-img/nav-6.png",
              "status":1,
              "price": 2999.11
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