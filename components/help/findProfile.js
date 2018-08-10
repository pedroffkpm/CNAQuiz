import categories from '../../static/categories.json';

export default function findProfile(id) {
    for (var index in categories) {
        if (categories[index].id === id) {
            return categories[index]
        }
    }
}