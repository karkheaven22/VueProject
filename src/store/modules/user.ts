import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import router, { resetRouter } from '@/router'
import { login, getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/cookies'

export interface IUserState {
    token: string
    name: string
    status: string
    avatar: string
    introduction: string
    roles: string
    email: string
  }

  @Module({ dynamic: true, store, name: 'user' })
  class User extends VuexModule implements IUserState {
    public token = getToken() || ''
    public name = ''
    status = ''
    public avatar = ''
    public introduction = ''
    public roles = ''
    public email = ''

    @Mutation
    private SET_TOKEN(token: string) {
      this.token = token
    }

    @Mutation
    private SET_NAME(name: string) {
        this.name = name
    }

    @Mutation
    SET_STATUS(status: string) {
      this.status = status;
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    private SET_INTRODUCTION(introduction: string) {
        this.introduction = introduction
    }

    @Mutation
    private SET_ROLES(roles: string) {
        this.roles = roles
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email
    }

    @Action
    public async Login(userInfo: { username: string, password: string}) {
        let { username, password } = userInfo
        username = username.trim()
        try{
          const { data } = await login({ 'Username':username, 'SecretKey': password, 'SecureTokenId': '1A553669'})
          setToken(data.Token)
          this.SET_TOKEN(data.Token)
          this.SET_NAME(data.UserName)
          return { 'result': true, 'message': '' };
        } catch (e : any){
          return { 'result': false, 'message': e.message };
        }
    }

    @Action
    public ResetToken() {
        //removeToken()
        this.SET_TOKEN('')
        this.SET_ROLES('')
    }

    @Action
    public async GetUserInfo() {
        if (this.token === '')
          throw Error('GetUserInfo: token is undefined!')

        //const { data } = await getUserInfo({ "roles" : "Admin", "name": "Demo", "avatar": "", "introduction" : "", "email" : ""})
        const data = ({ "roles": "Admin", "name": "Demo", "avatar": "", "introduction": "", "email": "" })

        if (!data)
          throw Error('Verification failed, please Login again.')

        const { roles, name, avatar, introduction, email } = data
        // roles must be a non-empty array
        if (!roles || roles.length <= 0)
          throw Error('GetUserInfo: roles must be a non-null array!')

        this.SET_ROLES(roles)
        this.SET_NAME(name)
        this.SET_AVATAR(avatar)
        this.SET_INTRODUCTION(introduction)
        this.SET_EMAIL(email)
    }

    @Action
    public async LogOut() {
      if (this.token === '') {
        throw Error('LogOut: token is undefined!')
      }

      removeToken()
      resetRouter()

      this.SET_TOKEN('')
    }
  }

  export const UserModule = getModule(User)
