// ==================Action===================== //

// 定义所有行为枚举
export enum ActionTypes {
  SET_COLLAPSED = "SET_COLLAPSED",
  TRIGGER_MENU_COLLAPSED = "TRIGGER_MENU_COLLAPSED",
}

// 菜单收展状态管理
export type SetCollapsedAction = {
  type: ActionTypes.SET_COLLAPSED;
  payload: boolean;
}

export type TriggerCollapsedAction = {
  type: ActionTypes.TRIGGER_MENU_COLLAPSED,
}

// 将每一个action联合起来
export type Actions = SetCollapsedAction|TriggerCollapsedAction


// ==================State===================== //

// 初始化状态值
export const initState = {
  collapsed: false,
}

export type State = typeof initState

// ==================Reducer===================== //


// 事件分发
export function reducer(state: State, action: Actions): State {
  switch(action.type) {
      case ActionTypes.SET_COLLAPSED: 
      return {
        ...state,
        collapsed: action.payload
      }
      case ActionTypes.TRIGGER_MENU_COLLAPSED:
        return {
          ...state,
          collapsed: !state.collapsed
        }
      default: 
        return state
  }
}