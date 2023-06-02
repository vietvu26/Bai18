import sum from "../sum";
test('2+3 = 5', ()=>{
    expect(sum(2,3)).toBe(5);
})

// test('There is no I in team', ()=> {
// expect('team').not.toMatch(/te/)});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });