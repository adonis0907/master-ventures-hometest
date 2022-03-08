import type { NextComponentType } from 'next'


const Nominee: NextComponentType = () => {
    return (
        <div>
            <div className="row">
                <h3 className="text-center">Nominee</h3>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <img src="https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Nominee;