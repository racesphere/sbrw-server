const carClasses = (req, res) => {
    res.send(`<ArrayOfCarClass>
    <CarClass>
    <CarClassHash>-2142411446</CarClassHash>
    <MaxRating>999</MaxRating>
    <MinRating>750</MinRating>
    </CarClass>
    <CarClass>
    <CarClassHash>-406473455</CarClassHash>
    <MaxRating>599</MaxRating>
    <MinRating>500</MinRating>
    </CarClass>
    <CarClass>
    <CarClassHash>-405837480</CarClassHash>
    <MaxRating>749</MaxRating>
    <MinRating>600</MinRating>
    </CarClass>
    <CarClass>
    <CarClassHash>415909161</CarClassHash>
    <MaxRating>399</MaxRating>
    <MinRating>250</MinRating>
    </CarClass>
    <CarClass>
    <CarClassHash>872416321</CarClassHash>
    <MaxRating>249</MaxRating>
    <MinRating>0</MinRating>
    </CarClass>
    <CarClass>
    <CarClassHash>1866825865</CarClassHash>
    <MaxRating>499</MaxRating>
    <MinRating>400</MinRating>
    </CarClass>
    </ArrayOfCarClass>`);
}

module.exports = carClasses;