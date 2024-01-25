/* eslint-disable react/prop-types */

const Title = ({title}) => {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl uppercase text-primary py-5  font-semibold text-center">{title}</h1>
        </div>
    );
};

export default Title;