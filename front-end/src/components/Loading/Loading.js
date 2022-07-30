import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={'20%'} width={'20%'} className="loading"/>
);

export default Loading;