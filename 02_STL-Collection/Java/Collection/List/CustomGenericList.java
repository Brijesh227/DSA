package Java.Collection.List;

import java.util.Iterator;

public class CustomGenericList<T> implements Iterable<T> {
    private T[] items;
    private int size;

    public CustomGenericList(int size) {
        this.size = size;
        items = (T[]) new Object[size];
    }

    public void add(T item) {
        items[size++] = item;
    }

    public T getItemAtIndex(int index){
        return items[index];
    }

    @Override
    public Iterator<T> iterator() {
        return new GenericListIterator(this);
    }

    private class GenericListIterator implements Iterator<T> {
        private CustomGenericList<T> list;
        private int index = 0;

        public GenericListIterator(CustomGenericList<T> list) {
            this.list = list;
        }

        @Override
        public boolean hasNext() {
            return index < list.size;
        }

        @Override
        public T next() {
            return list.items[index++];
        }
    }

}
