import { render } from "react-dom";
import Counter from "../Counter"
import '@testing-library/jest-dom';

test('Counters component is rendered', async()=>{
    render(<Counter/>)
    const btn = await screen.getByText('Count')

    expect(btn).toBeInTheDocument()
})

test('check event click', async()=>{
    render(<Counter/>)
    const btn = await screen.getByText('Count');
    await fireEvent.click(btn);
    const count = await screen.getByText('1');
    expect(count.textContent).toContain('1');
})