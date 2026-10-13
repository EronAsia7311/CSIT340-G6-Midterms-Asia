import {Summary} from './Summary';
import {Controls} from './Controls';
import {PlanCard} from './PlanCard';

function PlanPicker(seats, months, handleAddSeat, handleAddMonth, handleReset) {

return (
    <div>
        <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
            {Summary (seats, months)}
            {Controls (handleAddSeat, handleAddMonth, handleReset)}
        </div>

        <main className="grid grid-cols-3 gap-8 px-20 pt-10">
            {PlanCard("Starter", 199, "10 GB storage", "Email support", seats, months)}
            {PlanCard("Team", 499, "100 GB storage", "Chat support", seats, months)}
            {PlanCard("Business", 999, "1000 GB storage", "Phone support", seats, months)}
        </main>
      </div>
    )

    
}

export default PlanPicker;