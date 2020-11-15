import { Subscription,Reducer,Effect } from 'umi';
// 类型定义
type _dataObj= {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
interface UserModelType {
  namespace: 'userModel';
  state: {
    data: _dataObj[];
    effectData: _dataObj[]
  };
  reducers: {
    getlist:Reducer
  };
  effects: {
    effectGetList:Effect
  };
  subscriptions: {
    setup: Subscription;
  };
}
const UserModel: UserModelType = {
  namespace: 'userModel',
  state: {
    effectData: [
      {
        key: '1',
        name: '异步数据',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ],
    data: [
        {
          key: '1',
          name: 'bqc',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
  },
  reducers: {
    // getlist(state, action) {
    getlist(state, {type,payLoad}) {
        console.log(type,payLoad)
        if(payLoad.isEffect) {
            
        return state.effectData
        }else {
            
        return state.data
        }
    }
  },
  effects: {
      *effectGetList(action, {put}) {
          console.log(action, put)
          yield put({
              type: 'getlist',
              payLoad: {
                  test:'异步过来的',
                  isEffect: true
              }
          })
      }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname == '/users') {
            console.log(111)
          dispatch({
            type: 'getlist',
            payLoad: {
                isEffect: false
            }
          });
        //   dispatch({
        //     type: 'effectGetList',
        //   });
        }
      });
    },
  },
};
export default UserModel;
