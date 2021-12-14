// import logo from './logo.svg';
import { Button } from 'antd';
import './styles/App.css';
import img from './asd.jpg'
import style from './styles/index.module.css'
import SetStatePage from './pages/SetStatePage'
import ClassCreateComp from './pages/comp-types/Class';
import FunctionCreateComp from './pages/comp-types/Function';
import FunctionComponent from './pages/comp-types/funct';
import Contains from './pages/comp-types/Contains'
import LifCyclePage from './pages/LifeCyclePage';
import ReduxPage from './pages/redux-demo/ReduxPage';
import ReactRedux from './pages/redux-demo/ReactRedux';
import ReactRoutePage from './pages/router/RouterPage';
import ReactRoutePage2 from './pages/router/RouterPage2';
// NavLinkRute
// import NavLinkRoute from './pages/router/NavLinkRoute';
import HookPage from './pages/hook-page/EffectHook'
// const girlJpg = fs.path.resolve(paths.appPublic, '/image/枫叶与女孩.jpg')

// ** 基本使用
const singer = '谁是宝藏歌手'

// ** 函数
const favouriteShow = (userName, showName) => {
  return `有一个叫${userName}的家伙,喜欢看${showName}`
}

// ** 对象
const starName = '金光洙'


// ** jsx数组循环写法
const arr = ['撒花', '何美男', '谁是卧底']

const jsx = (
  <div>
    <ul>
      {
        arr.map((item, index) =>
          <li key={item + index}>
            经典中的经典{item}
            {index===0&&<Button  type="primary">按钮测试</Button>}
          </li>
        )
      }
    </ul>
  </div>
)

// ** 属性的使用

// ** 模块化
// 条件语句
const isADancer = false
const wangzuxian = <div>聂小倩</div>


function App() {
  return (
    <div className="App">
      综艺节目:
      {singer}

      <div className="title">
        {favouriteShow('zhangsan', 'running man')}
      </div>

      <p>
        节目上有个叫{starName}的大帅哥
      </p>

      <div className="title">
        {isADancer ? '张艺兴' : wangzuxian}
      </div>

      <hr></hr>
      <div className={style.bule}>
        {jsx}
      </div>

      <img
        alt="123"
        src={img}
        style={{ width: "50px", height: "30px" }}
      />
      <h3 className="page-root-title">这里是setState的使用</h3>
      <SetStatePage />
      <h3>组建创建方式</h3>
      <p>1. class创建</p>
      <ClassCreateComp />
      <p>2. function创建</p>
      <FunctionCreateComp />
      <FunctionComponent />

      <h3 className="page-root-title">标题有吗</h3>
      <Contains />

      <h3 className="page-root-title">生命周期</h3>
      <LifCyclePage />
      <h3 className="page-root-title">redux</h3>
      <ReduxPage />
      <h3 className="page-root-title">react-redux</h3>
      <ReactRedux />
      <h3 className="page-root-title">react-router</h3>
      <ReactRoutePage />
      <ReactRoutePage2 />
      <p>navLink</p>
      {/* <NavLinkRoute /> */}

      <h3 className="page-root-title">hook</h3>

      <HookPage />
    </div>
  );
}

export default App;
