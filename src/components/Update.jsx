import {useNavigate} from 'react-router-dom';

export const Update = (props) => {
    const navigate = useNavigate();
    navigate('/update', {replace: true,
    data: props
    });
}
export default Update;