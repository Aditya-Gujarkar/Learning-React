import Conditionals from "./Conditionals";

function ConditionalsTab() {
    return (
        <div className="ConditinalsTab">
            <Conditionals title="Laptop" price={15000} />
            <Conditionals title="Smartphone" price={8000} />
            <Conditionals title="Headphones" price={12000} />
        </div>
    );
}

export default ConditionalsTab;