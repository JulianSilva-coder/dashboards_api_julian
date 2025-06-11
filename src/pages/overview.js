import ProjectList from './components/ProjectList';
import SourceList from './components/SourceList';
import PanelList from './components/PanelList';
import DashboardList from './components/DashboardList';
import '../index.css';

export default function Overview() {
  return (
    <div className="container">
      <div className="section project-section">
        <ProjectList />
      </div>
      <div className="section source-section">
        <SourceList />
      </div>
      <div className="section panel-section">
        <PanelList />
      </div>
      <div className="section dashboard-section">
        <DashboardList />
      </div>
    </div>
  );
}
