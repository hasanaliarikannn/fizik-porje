import { Link } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div>
			<div >
				<h3>Ayarlar</h3>
			</div>
			<div >
				<Link>Change Password</Link>
			</div>
			<div >
				<Link>Change Name</Link>
			</div>
		</div>
	);
};
export default Sidebar;
