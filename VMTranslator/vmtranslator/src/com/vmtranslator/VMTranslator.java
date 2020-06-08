package com.vmtranslator;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class VMTranslator {

	public static void main(String[] args) {	
		//How to read from a file
		File file = new File("BasicTest.vm");
		
		try (BufferedReader br = new BufferedReader(new FileReader(file))) {
			String line;
			
			while ((line = br.readLine()) != null) {
				System.out.println(line);
			}
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
