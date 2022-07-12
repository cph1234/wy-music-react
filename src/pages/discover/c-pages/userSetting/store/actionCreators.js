import { getUserSetting } from "@/services/user"
import * as actionTypes from "./constants"

export const getUserSettingAction = (gender, birthday, nickname, province, city, signature) => {
  return dispatch => {
    getUserSetting(gender, birthday, nickname, province, city, signature).then(res => {
      dispatch(changUserSettingAction(res))
    })
  }
}

const changUserSettingAction = userSetting => ({
  type: actionTypes.GET_USER_SETTING,
  userSetting
})
