import ProjectList from './components/ProjectList';
import SourceList from './components/SourceList';
import PanelList from './components/PanelList';
import DashboardList from './components/DashboardList';

export default function Overview() {
  return (
    <div className="container">
      <div className="section">
        <ProjectList />
      </div>
      <div className="section">
        <SourceList />
      </div>
      <div className="section">
        <PanelList />
      </div>
      <div className="section">
        <DashboardList />
      </div>
    </div>
  );
}
