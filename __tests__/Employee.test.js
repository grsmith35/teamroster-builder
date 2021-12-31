const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const person = new Employee('riley', 4, 'riley@mail.com');

    expect(person.name).toBe('riley');
    expect(person.id).toEqual(4);
    expect(person.email).toBe('riley@mail.com');
})