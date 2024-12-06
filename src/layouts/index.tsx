import { Link, Outlet, useLocation } from 'umi';
import styles from './index.less';
import { Footer } from 'antd/es/layout/layout';
import { MailOutlined } from '@ant-design/icons';

export default function Layout() {
  const location = useLocation(); // 获取当前路由信息
  console.log(location.pathname);
  return (
    <>
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
      <Footer className={styles.footer}>
        <div className={styles.item}>
          <MailOutlined />
          <span> sbvigoss@gmail.com</span>
        </div>
      </Footer>
    </>
  );
}
