const { succeed, fail, repair, get } = require('./enhancer.js');

describe('Testing Succeed', function () {
    it('items enhancement should increase by 1 ', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 13
        }
        const expected = {
            name: "axe",
            durability: 40,
            enhancement: 14
        }
        const enhancedItem = succeed(item)
        expect(enhancedItem).toEqual(expected)
    })
    it('items enhancement level should remain the same', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 20
        }
        const expected = {
            name: "axe",
            durability: 40,
            enhancement: 20
        }
        const enhancedItem = succeed(item)
        expect(enhancedItem).toEqual(expected)
    })
    it('The durability of the item is unchanged', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 14
        }
        const expected = {
            name: "axe",
            durability: 40,
            enhancement: 15
        }
        const enhancedItem = succeed(item)
        expect(enhancedItem).toEqual(expected)
    })
})

describe('Testing Fail', function () {
    it('Enhancment less then 15, durability of item is decreased by 5', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 13
        }
        const expected = {
            name: "axe",
            durability: 35,
            enhancement: 13
        }
        const failItem = fail(item)
        expect(failItem).toEqual(expected)
    })
    it('Enhancment greater than 14, durability of item is decreased by 10', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 15
        }
        const expected = {
            name: "axe",
            durability: 30,
            enhancement: 15
        }
        const failItem = fail(item)
        expect(failItem).toEqual(expected)
    })
    it('Enhancment level 17, level decreses by 1', function () {
        const item = {
            name: "axe",
            durability: 40,
            enhancement: 17
        }
        const expected = {
            name: "axe",
            durability: 30,
            enhancement: 16
        }
        const failItem = fail(item)
        expect(failItem).toEqual(expected)
    })
})

describe('Testing Repair', function () {
    it('Takes and item and changes durability to 100', function () {
        const item = {
            name: "axe",
            durability: 25,
            enhancement: 17
        }
        const expected = {
            name: "axe",
            durability: 100,
            enhancement: 17
        }
        const repairItem = repair(item)
        expect(repairItem).toEqual(expected)
    })
})

describe('Testing Get', function () {
    it('Has enhancement level 0, name remains the same', function () {
        const item = {
            name: "poor-axe",
            durability: 2,
            enhancement: 0
        }
        const expected = {
            name: "poor-axe",
            durability: 2,
            enhancement: 0
        }
        const getItem = get(item)
        expect(getItem).toEqual(expected)
    })
    it('Has enhancement level greater than 0, name updates', function () {
        const item = {
            name: "axe",
            durability: 25,
            enhancement: 4
        }
        const expected = {
            name: "[+4] axe",
            durability: 25,
            enhancement: 4
        }
        const getItem = get(item)
        expect(getItem).toEqual(expected)
    })
})