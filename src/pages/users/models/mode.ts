import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';



const userModel = {
  namespace: 'users',

  state: {
    name: '',
  },
//   异步
  effects: {
    *query({ payload }, { call, put }) {
    },
  },
//   同步
  reducers: {
    save(state, action) {
        const data = [
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
          ];
      return data
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'save',
          })
        }
      });
    }
  }
};

export default userModel;
