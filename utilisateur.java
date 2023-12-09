package com.example.etape1;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class utilisateur extends AppCompatActivity {

    private EditText editTextNom, editTextPrenom, editTextEmail, editTextPassword, editTextMatiere;
    private Button buttonInscrire;
    FirebaseAuth mAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.inscription);
        mAuth = FirebaseAuth.getInstance();

        // Initialiser les éléments de l'interface utilisateur
        editTextNom = findViewById(R.id.editTextNom);
        editTextPrenom = findViewById(R.id.editTextprénom);
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        editTextMatiere = findViewById(R.id.matiére);
        buttonInscrire = findViewById(R.id.buttoninscrire);

        // Ajouter un écouteur de clic au bouton d'inscription
        buttonInscrire.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // Récupérer les valeurs entrées par l'utilisateur
                String nom = editTextNom.getText().toString();
                String prenom = editTextPrenom.getText().toString();
                String email = editTextEmail.getText().toString();
                String mdp = editTextPassword.getText().toString();
                String matiere = editTextMatiere.getText().toString();

                mAuth.createUserWithEmailAndPassword(email, mdp)
                        .addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                            @Override
                            public void onComplete(@NonNull Task<AuthResult> task) {
                                if (task.isSuccessful()) {
                                    // Utilisateur créé avec succès
                                    Toast.makeText(utilisateur.this, "Le compte a été créé avec succès.",
                                            Toast.LENGTH_SHORT).show();
                                    Intent intent = new Intent(utilisateur.this, menuu.class);
                                    startActivity(intent);

                                    // Enregistrez des informations supplémentaires dans Realtime Database
                                    //FirebaseUser currentUser = mAuth.getCurrentUser();
                                    // if (currentUser != null) {
                                    //String userId = currentUser.getUid();
                                    //saveUserDataToDatabase(userId, nom, prenom, email, matiere);
                                //}
                                } else {
                                    // La création du compte a échoué
                                    Toast.makeText(utilisateur.this, "La création du compte a échoué: " + task.getException().getMessage(),
                                            Toast.LENGTH_SHORT).show();
                                }
                            }
                        });

                // Ici, vous pouvez ajouter la logique pour traiter les données, par exemple, envoyer à un serveur, enregistrer dans une base de données, etc.

                // Afficher un message de réussite
               // String message = "Inscription réussie : \nNom : " + nom + "\nPrénom : " + prenom + "\nEmail : " + email + "\nMatière : " + matiere;
                //Toast.makeText(utilisateur.this, message, Toast.LENGTH_SHORT).show();
            }
        });
    }

    //private void saveUserDataToDatabase(String userId, String nom, String prenom, String email, String matiere) {
        // Créer une référence pour l'utilisateur dans Realtime Database
        //DatabaseReference userRef = FirebaseDatabase.getInstance().getReference().child("users").child(userId);

        // Enregistrez les informations de l'utilisateur dans la base de données
        //userRef.child("nom").setValue(nom);
        //userRef.child("prenom").setValue(prenom);
        //userRef.child("email").setValue(email);
        //userRef.child("matiere").setValue(matiere);

    }
//}

