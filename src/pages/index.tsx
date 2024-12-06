import { Collapse } from 'antd';
const { Panel } = Collapse;
import pianoIco from '@/assets/piano.png';

export default function HomePage() {
  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={
          <div>
            <img width={48} height={48} src={pianoIco}/>
          </div>
        }
        showArrow={false} 
        key="1">
          <div>
            <p>Dear parents, are you looking for a piano app that can inspire your child's musical talent? We have brought you this unique piano app, which not only allows children to learn piano easily, but also lets them enjoy the charm of music in games!</p>
            <p>The main feature of this piano app is that it can set piano shortcut keys and adjust the number of keys, allowing children to personalize their settings according to their preferences and needs. Whether they are beginners or experienced players, they can find their own learning style in this app.</p>
            <p>In addition, we provide a rich selection of music tracks and interactive games, allowing children to learn piano in a relaxed and enjoyable atmosphere. Through this app, children can not only improve their musical literacy, but also cultivate their creativity and imagination.</p>
            <p>Now, this piano app is about to be launched on the App Store. We sincerely invite you to download and experience it! Let's witness your child's musical talent together and let them swim in the ocean of music!</p>
            <p>This app does not collect or use any personal information.</p>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
