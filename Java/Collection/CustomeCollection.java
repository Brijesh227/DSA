package Java.Collection;

import java.util.Iterator;

import Java.Collection.List.CustomGenericList;

public class CustomeCollection {

    public static void main(String[] args) {
        CustomGenericList<Integer> list = new CustomGenericList<>(100);

        list.add(1);
        list.add(2);
        list.add(3);

        Iterator<Integer> iterator = list.iterator();     // this converts into below for loop
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        for (int item : list) {
            System.out.println(item);
        }
    }
}