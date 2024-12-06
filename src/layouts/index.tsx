import { Link, Outlet, useLocation } from 'umi';
import styles from './index.less';

export default function Layout() {
  const location = useLocation(); // 获取当前路由信息
  console.log(location.pathname);
  return (
    <div className={styles.navs}>
      <div className={styles.header}>
        <div className={`${styles.item} ${location.pathname === '/' ? styles.active : ''
          }`}>
          <Link to="/">Home</Link>
        </div>
        <div className={`${styles.item} ${location.pathname === '/about' ? styles.active : ''
          }`}>
          <Link to="/about">About Me</Link>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
