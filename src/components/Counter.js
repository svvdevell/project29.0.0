import {memo} from "react";
import {Button, Input, Box, IconButton} from "@chakra-ui/react";
import useCounter from "../hooks/useCounter";
import {RepeatIcon} from "@chakra-ui/icons";

const Counter = () => {
    const {count, setCount, increment, decrement, reset, initialValue} = useCounter(1);

    const handleChange = ({ target: { value } }) => {
        if (value !== "" && value < initialValue) {
            setCount(initialValue);
            return;
        }
        setCount(value);
    };

    return (<form>
        <Box display="flex" alignItems="center" gap="15px" justifyContent="center" flexDirection="column">
            <Box display="flex" alignItems="center" gap="15px" justifyContent="center">
                <Button onClick={increment} colorScheme="facebook">+</Button>
                <Input display="flex" alignItems="center" value={count} width="100px" textAlign="center"
                       onChange={handleChange}/>
                <Button onClick={decrement} colorScheme="facebook" disabled={count <= initialValue}>-</Button>
            </Box>
            <IconButton
                colorScheme="pink"
                aria-label="Search database"
                onClick={reset}
                icon={<RepeatIcon/>}
            />
        </Box>
    </form>);
};

export default memo(Counter);









