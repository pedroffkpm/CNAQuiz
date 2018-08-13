import categories from '../../static/categories.json';

export default function findProfile(id) {
    var profile = {}
    for (var index in categories) {
        if (categories[index].id === id) {
            profile = categories[index]
        }
    }
    return profile
}