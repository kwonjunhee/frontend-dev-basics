const MyComponent = () => { // 화살표 함수 문법
    return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;